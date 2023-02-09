import { useEffect, useState } from "react";
import { FETCH_RESTAURANT_DATA } from "../../constants";

const useRestaurant = (resId) => {
  const [restaurant, setRestaurant] = useState(null);

  // Get data from  API

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(FETCH_RESTAURANT_DATA + resId);
    const json = await data.json();
    setRestaurant(json.data);
    console.log(json.data);
  }

  return restaurant;
};

export default useRestaurant;
