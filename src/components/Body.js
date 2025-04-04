import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import userContext from "../utils/userContext";

const Body = () => {
    const [restaurantList, setRestaurantList] = useState([]);

    const [filteredRestaurantList, setFilteredRestaurantList] = useState([]);

    const [searchText, setSearchText] = useState("");

    const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

    const { loggedInUser, setUserName } = useContext(userContext);

    useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
        const res = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532");
        const jsonData = await res.json();
        setRestaurantList(jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurantList(jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };

    const onlineStatus = useOnlineStatus();

    if (!onlineStatus) {
        return (
            <h1>You are offiline, please check your connect !!!!!!!!</h1>
        )
    };

    return (
        (restaurantList.length === 0) ? <Shimmer /> : <div className="body">
            {/* <div className="search">Search</div> */}
            <div className="flex">
                <div className="m-4 p-4">
                    <input type="text" 
                        className="border border-solid border-black rounded-l" 
                        value={searchText} 
                        onChange={(e) => {
                            setSearchText(e.target.value)
                    }} />
                    <button className="px-4 py-2 bg-green-100 m-4" onClick={() => {
                        console.log(restaurantList);
                        const filterList = restaurantList.filter((res) => {
                            return res.info.name.toLowerCase().includes(searchText.toLowerCase())
                        })
                        console.log(filterList);
                        setFilteredRestaurantList(filterList);
                    }}>Search</button>
                </div>
               <div className="m-4 p-4 flex items-center">
                <button className="px-4 py-2 bg-green-100 rounded-l"
                        onClick={() => {
                            setRestaurantList(restaurantList.filter(res => res?.info?.avgRating > 4))
                        }}>
                        Top Rated Restaurant
                    </button>
               </div>
               <div className="m-4 p-4 flex items-center">
                <label>UserName : </label>
                <input
                        className="border border-black p-2"
                        value={loggedInUser}
                        onChange={(e) => setUserName(e.target.value)}
                    />
               </div>
            </div>
            <div className="flex flex-wrap">
                {
                    filteredRestaurantList.map(restorant => 
                        <Link to={"/restaurants/" + restorant.info.id} key={restorant.info.id}> 
                            {restorant?.info?.promoted  ? (<RestaurantCardPromoted restro={restorant}/>) : ( <RestaurantCard restro={restorant} />)}
                           
                        </Link>)
                }
            </div>
        </div>
    );
};

export default Body;