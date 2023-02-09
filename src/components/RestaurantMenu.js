import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../constants";
import Shimmer from "./Shimmer";
import useRestaurant from "../utils/hooks/useRestaurant";

const RestaurantMenu = () => {
  const params = useParams();

  const restaurant = useRestaurant(params.id);

  return !restaurant ? (
    <Shimmer />
  ) : (
    <>
      <div className="menu">
        <div>
          <h1>Restaurant id: {params.id}</h1>
          <h2>Restaurant Name : {restaurant.name}</h2>
          <img src={IMG_CDN_URL + restaurant.cloudinaryImageId} />
          <h3>Area : {restaurant.area}</h3>
          <h3>City : {restaurant.city}</h3>
          <h4>Avg rating : {restaurant.avgRating}</h4>
          <h4>Cost for 2 : {restaurant.costForTwoMsg}</h4>
        </div>
        <div>
          <h1>Menu</h1>
          <ul>
            {Object.values(restaurant?.menu?.items).map((item) => (
              <li key={item.id}>{item.name}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default RestaurantMenu;
