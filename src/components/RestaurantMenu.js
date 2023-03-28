/** @format */

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../constants";
import Shimmer from "./Shimmer";
import useRestaurant from "../utils/hooks/useRestaurant";
import { addItem } from "../utils/CartSlice";
import { useDispatch } from "react-redux";

const RestaurantMenu = () => {
  const params = useParams();

  const restaurant = useRestaurant(params.id);

  const dispatch = useDispatch();

  const handleAddItems = (item) => {
    dispatch(addItem(item));
  };

  return !restaurant ? (
    <Shimmer />
  ) : (
    <>
      <div className="menu flex">
        <div>
          <h1>Restaurant id: {params.id}</h1>
          <h2>Restaurant Name : {restaurant.name}</h2>
          <img src={IMG_CDN_URL + restaurant.cloudinaryImageId} />
          <h3>Area : {restaurant.area}</h3>
          <h3>City : {restaurant.city}</h3>
          <h4>Avg rating : {restaurant.avgRating}</h4>
          <h4>Cost for 2 : {restaurant.costForTwoMsg}</h4>
        </div>
        <div className="p-5">
          <h1 className="font-bold">Menu</h1>
          <ul>
            {Object.values(restaurant?.menu?.items).map((item) => (
              <li key={item.id}>
                {item.name} -{" "}
                <button
                  className="p-1 m-2 bg-gray-400"
                  onClick={() => handleAddItems(item)}
                >
                  Add +
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default RestaurantMenu;
