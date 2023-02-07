import React from "react";
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
        <p>This is namaste React Chapter-07 Finding the path</p>

        <Outlet />
      </div>
    );
  }
}

export default About;
