/** @format */

import { useSelector, useDispatch } from "react-redux";
import FoodItem from "./FoodItem";
import { clearCart } from "../utils/CartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  // console.log(cartItems);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div>
      <h1 className="font-bold text-3xl m-5">Cart- {cartItems.length} Items</h1>
      <button className="bg-gray-200 p-2 m-5" onClick={handleClearCart}>
        CLEAR CART
      </button>
      <div className="flex">
        {cartItems.map((item) => (
          <FoodItem {...item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default Cart;
