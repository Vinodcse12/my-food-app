import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const { restro } = props;
    const { cloudinaryImageId, name, cuisines, avgRatingString, costForTwo } = restro.info;
    return (
        <div className="m-4 p-4 w-[250px] rounded-lg bg-gray-50 hover:bg-gray-500">
            <img
                className="rounded-lg"
                alt="restro-logo"
                src={
                    CDN_URL + cloudinaryImageId
                }
            />
            <h3 className="font-bold py-2 text-l">{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRatingString}</h4>
            <h4>{costForTwo}</h4>
        </div>
    );
};

// High Order Component

// input -> RestaurantCard ==> RestaurantCardPrmoted

export const withPromotedLabel = (RestaurantCard) => {
    return (props) => {
        return (
            <div className="">
                <label className="absolute bg-black text-white m-2 p-2 rounded-lg">Propmoted</label>
                <RestaurantCard {...props}/>
            </div>
        )
    }
}

export default RestaurantCard;