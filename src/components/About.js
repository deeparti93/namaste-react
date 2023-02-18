/** @format */

import React from "react";
import UserContext from "../utils/UserContext";
import { Outlet } from "react-router-dom";
// import Profile from "./Profile";
import Profile from "./ProfileClass";

// const About = () => {
//   return (
//     <div>
//       <h1>About Us Page</h1>
//       <p>This is namaste React Chapter-07 Finding the path</p>

//       <Outlet />
//     </div>
//   );
// };

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("Parent - Constructor");
  }

  componentDidMount() {
    console.log("Parent - componentDidMount");
  }

  render() {
    console.log("Parent - render");
    return (
      <div>
        <h1>About Us Page</h1>
        <UserContext.Consumer>
          {({ user }) => (
            <h2 className="p-10 font-bold text-red-700">
              {user.name} - {user.email}
              <span className="text-red-700 font-thin">
                (This is coming from context)
              </span>
            </h2>
          )}
        </UserContext.Consumer>
        <p>This is namaste React Chapter-07 Finding the path</p>

        <Outlet />
      </div>
    );
  }
}

export default About;
