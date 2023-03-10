/** @format */

import { useEffect, useState, useContext } from "react";
import { restaurantList } from "../constants";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import { FETCH_ALL_RESTAURANTS } from "../constants";
import useOnline from "../utils/hooks/useOnline";
import UserContext from "../utils/UserContext";

// no key(not acceptable) <<<<<<<<<<<<< index as a key (use this only when we dont have any other key) <<<<<< unique key (best practice)
const Body = () => {
  const [searchTxt, setSearchTxt] = useState("");
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  const { user, setUser } = useContext(UserContext);

  //empty array dependency => once after render
  // dependency array[] => once after initial render + everytime after re-render
  useEffect(() => {
    // DO API CALL HERE
    getRestaurants();
  }, []);

  async function getRestaurants() {
    // You will get CORS error as browser wont allow localhost to call swiggy url directly.
    // You can install CORS plugins in browser to allow and TURN ON the configuration.
    const data = await fetch(FETCH_ALL_RESTAURANTS);
    const json = await data.json();
    // Optional chaining
    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  }

  const online = useOnline(); // this is a custom hook

  if (!online) {
    return <h1>You are offline, please check your internet connection!!!</h1>;
  }

  const onChangeHandler = (e) => {
    setSearchTxt(e.target.value);
  };

  const onSearchClick = () => {
    //need to filter the data
    //update the state var
    const data = filterData(searchTxt, allRestaurants);

    setFilteredRestaurants(data);
  };

  if (!allRestaurants) {
    return null;
  }

  return allRestaurants.length == 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="p-3 bg-slate-400">
        <input
          type="text"
          className="border-slate-700 p-2"
          placeholder="Search"
          value={searchTxt}
          onChange={onChangeHandler}
        ></input>
        <button
          onClick={onSearchClick}
          className="bg-slate-700 hover:bg-slate-900 p-2 text-white"
        >
          search
        </button>
        <input
          value={user.name}
          onChange={(e) => setUser({ name: e.target.value })}
        ></input>
      </div>
      <div className="flex flex-wrap">
        {!filteredRestaurants.length ? (
          <h1>No restaurants matched your filter!!!</h1>
        ) : (
          filteredRestaurants.map((restaurant) => {
            return (
              <Link
                to={"/restaurant/" + restaurant.data.id}
                key={restaurant.data.id}
              >
                <RestaurantCard {...restaurant.data} />
              </Link>
            );
          })
        )}
      </div>
    </>
  );
};

export default Body;
