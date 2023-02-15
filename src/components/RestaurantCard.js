/** @format */

import { IMG_CDN_URL } from "../constants";

const RestaurantCard = ({ name, cloudinaryImageId, cuisines, avgRating }) => {
  return (
    <div className="w-[200px] p-2 m-2 shadow-md bg-slate-200 border-slate-800">
      <img src={IMG_CDN_URL + cloudinaryImageId} alt="alt-img"></img>
      <h2 className="font-bold">{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h4>{avgRating} stars</h4>
    </div>
  );
};

export default RestaurantCard;
