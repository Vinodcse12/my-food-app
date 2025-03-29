
import { useParams } from "react-router-dom";
import useRestaurantMenu from "./../utils/useRestaurantMenu"

import Shimmer from './Shimmer';

function RestaurantMenu() {
    const { restoId } = useParams();
   
    const restroInfo = useRestaurantMenu(restoId);

    const { name, costForTwoMessage, cuisines} = (restroInfo) ?  restroInfo?.cards[2]?.card?.card?.info : "undefind";
    const { itemCards } = (restroInfo) ?  restroInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card : "undefind";
    
    return restroInfo === null ? ( <Shimmer />) : (
        <div className="menu">
            <h1>{name}</h1>
            <p>{cuisines.join(", ")} - {costForTwoMessage}</p>

            <h2>Menu Items</h2>
            <ul>
               {itemCards.map((item) => <li>
                    {item?.card?.info?.name} - {(item?.card?.info?.price) / 100}
               </li>)} 
            
            </ul>
        </div>
    )
}

export default RestaurantMenu
