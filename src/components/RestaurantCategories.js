import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategories = ({ data, showItems, setShowIndex }) => {
    console.log(showItems);
    handleClick = () => {
        setShowIndex();
    };

    return (
        <div className="w-10/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 ">
            <div className="flex justify-between cursor-pointer" onClick={handleClick}>
                <span>{data?.title}</span>
                <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5" />
                </svg>
            </div>
            {showItems && <ItemList key={data?.id} items={data.itemCards} />}
        </div>
    )
}

export default RestaurantCategories;