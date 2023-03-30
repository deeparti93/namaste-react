/** @format */

import React from "react";
import Button from "./Button";

const ButtonList = () => {
  const btnList = [
    "All",
    "Live",
    "Gaming",
    "Sports",
    "Cooking",
    "Comedy",
    "Cricket",
    "Soccer",
    "News",
    "Music",
    "Recently Uploaded",
    "Presentations",
  ];

  return (
    <div className="flex">
      {btnList.map((item, index) => (
        <Button name={item} key={index}></Button>
      ))}
    </div>
  );
};

export default ButtonList;
