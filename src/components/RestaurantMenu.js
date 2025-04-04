
import { useParams } from "react-router-dom";
import useRestaurantMenu from "./../utils/useRestaurantMenu";
import RestaurantCategories from './RestaurantCategories';

import Shimmer from './Shimmer';
import { useState } from "react";

function RestaurantMenu() {
    const { restoId } = useParams();
    const [showIndex, setShowIndex] = useState(0);

    const restroInfo = useRestaurantMenu(restoId);

    const { name, costForTwoMessage, cuisines } = (restroInfo) ? restroInfo?.cards[2]?.card?.card?.info : "undefind";
    const { itemCards } = (restroInfo) ? restroInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card : "undefind";
    const categories = (restroInfo) ?
        (restroInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
            (c) =>
                c.card?.["card"]?.["@type"] ===
                "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        )) : "undefind";
    return restroInfo === null ? (<Shimmer />) : (
        <div className="text-center">
            <h1 className="font-bold my-4 text-xl">{name}</h1>
            <p className="font-bold text-lg">{cuisines.join(", ")} - {costForTwoMessage}</p>

            {categories.map((category, index) => <RestaurantCategories
                key={category?.card?.card.title}
                data={category?.card?.card}
                showItems={index === showIndex ? true : false}
                setShowIndex={() => setShowIndex(index)} />)}
            <span></span>
        </div>
    )
}

export default RestaurantMenu
