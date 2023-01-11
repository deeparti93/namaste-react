import { useState } from "react";
import { restaurantList } from "../src/constants";
import RestaurantCard from "./RestaurantCard";

// no key(not acceptable) <<<<<<<<<<<<< index as a key (use this only when we dont have any other key) <<<<<< unique key (best practice)
const Body = () => {
  const [searchTxt, setSearchTxt] = useState("");
  const [restaurants, setRestaurants] = useState(restaurantList);

  const onChangeHandler = (e) => {
    setSearchTxt(e.target.value);
  };

  const filterData = (searchTxt, restaurantList) => {
    return restaurantList.filter((restaurant) =>
      restaurant.data.name.includes(searchTxt)
    );
  };

  const onSearchClick = () => {
    //need to filter the data
    //update the state var
    const data = filterData(searchTxt, restaurantList);

    setRestaurants(data);
  };

  return (
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
        {restaurants.map((restaurant) => {
          return (
            <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
          );
        })}
        {/* <RestaurantCard {...restaurantList[0].data} />
      <RestaurantCard {...restaurantList[1].data} />
      <RestaurantCard {...restaurantList[2].data} />
      <RestaurantCard {...restaurantList[3].data} />
      <RestaurantCard {...restaurantList[4].data} />
      <RestaurantCard {...restaurantList[5].data} />
      <RestaurantCard {...restaurantList[6].data} />
      <RestaurantCard {...restaurantList[7].data} /> */}
      </div>
    </>
  );
};

export default Body;
