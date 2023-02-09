import { useState } from "react";
import FoodVillaLogo from "../assets/images/FoodVillaLogo.png";
import { Link } from "react-router-dom";

const Title = () => {
  return (
    <a href="/">
      <img src={FoodVillaLogo} alt="logo-img" className="logo"></img>
    </a>
  );
};

export default Header = () => {
  const [isLoggedInUser, setLoggedInUser] = useState(false);

  return (
    <div className="header">
      {<Title />}
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>

          {/* Using <a> tag will reload the page so instead use <Link> comp provided by react-router-dom */}
          {/* <a href="about">About</a> */}
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/instamart">Instamart</Link>
          </li>
          <li>Cart</li>
        </ul>
      </div>
      {!isLoggedInUser ? (
        <button onClick={() => setLoggedInUser(true)}>Login</button>
      ) : (
        <button onClick={() => setLoggedInUser(false)}>Logout</button>
      )}
    </div>
  );
};
