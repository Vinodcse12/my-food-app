import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { restro } = props;
  const { cloudinaryImageId, name, cuisines, avgRatingString, costForTwo} = restro.info;
  return (
    <div className="restro-card">
      <img
        className="restro-log"
        alt="restro-logo"
        src={
            CDN_URL + cloudinaryImageId
        }
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRatingString}</h4>
      <h4>{costForTwo}</h4>
    </div>
  );
};

export default RestaurantCard;