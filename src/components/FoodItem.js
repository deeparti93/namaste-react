/** @format */

import { IMG_CDN_URL } from "../constants";

const FoodItem = ({ name, cloudinaryImageId, description, price }) => {
  return (
    <div className="w-[200px] p-2 m-2 shadow-md bg-slate-200 border-slate-800">
      <img src={IMG_CDN_URL + cloudinaryImageId} alt="alt-img"></img>
      <h2 className="font-bold">{name}</h2>
      <h3>{description}</h3>
      <h3>Rs.{price / 100}</h3>
    </div>
  );
};

export default FoodItem;
