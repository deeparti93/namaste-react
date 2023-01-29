import { useState } from "react";

const Title = () => {
  return (
    <img
      src="https://yt3.ggpht.com/ytc/AMLnZu_EC-ECXAxRAixWGEfMsE1rdSoetBHyxmLNdtCB=s900-c-k-c0x00ffffff-no-rj"
      alt="logo-img"
      className="logo"
    ></img>
  );
};

export default Header = () => {
  const [isLoggedInUser, setLoggedInUser] = useState(false);

  return (
    <div className="header">
      {<Title />}
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
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
