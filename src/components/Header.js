/** @format */

import { useState, useContext } from "react";
import FoodVillaLogo from "../assets/images/FoodVillaLogo.png";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";

const Title = () => {
  return (
    <a href="/">
      <img src={FoodVillaLogo} alt="logo-img" className="w-28"></img>
    </a>
  );
};

export default Header = () => {
  const [isLoggedInUser, setLoggedInUser] = useState(false);

  const { user } = useContext(UserContext);

  return (
    <div className="flex justify-between bg-slate-400 shadow-lg my-5">
      {<Title />}
      <div className="nav-items">
        <ul className="flex py-10">
          <li className="px-3">
            <Link to="/">Home</Link>
          </li>

          {/* Using <a> tag will reload the page so instead use <Link> comp provided by react-router-dom */}
          {/* <a href="about">About</a> */}
          <li className="px-3">
            <Link to="/about">About</Link>
          </li>
          <li className="px-3">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="px-3">
            <Link to="/instamart">Instamart</Link>
          </li>
          <li className="px-3">Cart</li>
        </ul>
      </div>
      <span className="p-10 font-bold text-red-700">{user.name}</span>
      {!isLoggedInUser ? (
        <button onClick={() => setLoggedInUser(true)}>Login</button>
      ) : (
        <button onClick={() => setLoggedInUser(false)}>Logout</button>
      )}
    </div>
  );
};
