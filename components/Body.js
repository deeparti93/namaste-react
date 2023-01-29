import { useEffect, useState } from "react";
import { restaurantList } from "../src/constants";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

// no key(not acceptable) <<<<<<<<<<<<< index as a key (use this only when we dont have any other key) <<<<<< unique key (best practice)
const Body = () => {
  const [searchTxt, setSearchTxt] = useState("");
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  //empty array dependency => once after render
  // dependency array[] => once after initial render + everytime after re-render
  useEffect(() => {
    // DO API CALL HERE
    getRestaurants();
  }, []);

  async function getRestaurants() {
    // You will get CORS error as browser wont allow localhost to call swiggy url directly.
    // You can install CORS plugins in browser to allow and TURN ON the configuration.
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.1301641&lng=72.9993799&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log("json data ---", json);
    // Optional chaining
    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  }

  const onChangeHandler = (e) => {
    setSearchTxt(e.target.value);
  };

  const filterData = (searchTxt, allRestaurants) => {
    return allRestaurants.filter((restaurant) =>
      restaurant.data.name.toLowerCase().includes(searchTxt.toLowerCase())
    );
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
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchTxt}
          onChange={onChangeHandler}
        ></input>
        <button onClick={onSearchClick}>search</button>
      </div>
      <div className="restaurant-list">
        {!filteredRestaurants.length ? (
          <h1>No restaurants matched your filter!!!</h1>
        ) : (
          filteredRestaurants.map((restaurant) => {
            return (
              <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
            );
          })
        )}
      </div>
    </>
  );
};

export default Body;
