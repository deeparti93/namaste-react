/** @format */

import React from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const Header = () => {
  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg">
      <div className="flex col-span-1">
        <img
          className="h-8 cursor-pointer"
          alt="menu"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsrOrSMuA5ktdygVzRHxpCyazKrIIdP5f_gBUYsso&s"
          onClick={toggleMenuHandler}
        />
        <img
          className="h-8 mx-2"
          alt="logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png"
        ></img>
      </div>
      <div className="col-span-10 flex justify-center">
        <input className="border border-gray-400 p-4 rounded-l-3xl w-2/4 h-9" type="text" placeholder="Search"></input>
        <button className="border border-gray-400 rounded-r-3xl h-9 bg-gray-300 px-4 py-2">
          <img
            alt="search"
            src="https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/search-512.png"
            className="h-full"
          ></img>
        </button>
      </div>
      <div className="col-span-1">
        <img
          alt="user"
          className="h-8"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5958mvxyOALrWelcizzxdX48KqChi9Vh2Sr_NETQ&s"
        ></img>
      </div>
    </div>
  );
};

export default Header;
