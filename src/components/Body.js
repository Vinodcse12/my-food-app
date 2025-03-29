import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
    const [restaurantList, setRestaurantList] = useState([]);

    const [filteredRestaurantList, setFilteredRestaurantList] = useState([]);

    const [searchText, setSearchText] = useState("");

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

    if(!onlineStatus) {
        return (
            <h1>You are offiline, please check your connect !!!!!!!!</h1>
        )
    };

    return (
      (restaurantList.length === 0) ? <Shimmer /> : <div className="body">
        {/* <div className="search">Search</div> */}
        <div className="filter-list">
            <div className="search">
                <input type="text" className="search-box" value={searchText} onChange={(e) => {
                    setSearchText(e.target.value)
                }}/>
                <button className="seatch-btn" onClick={() => {
                    console.log(restaurantList);
                    const filterList = restaurantList.filter((res) => {
                        console.log(res);
                        return res.info.name.toLowerCase().includes(searchText.toLowerCase())
                    })
                    console.log(filterList);
                    setFilteredRestaurantList(filterList);
                }}>Search</button>
            </div>
            <button className="filter-btn"
                onClick={() => {
                    setRestaurantList(restaurantList.filter(res => res?.info?.avgRating > 4))
                }}>
            Top Rated Restaurant 
            </button>
        </div>
        <div className="restro-container">
          {
              filteredRestaurantList.map(restorant => <Link to={"/restaurants/" + restorant.info.id} key={restorant.info.id}> <RestaurantCard restro={restorant} /></Link>)
          }
        </div>
      </div>
    );
};

export default Body;