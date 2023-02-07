import React from "react";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    console.log("Child - Constructor");
  }

  componentDidMount() {
    console.log("Child - componentDidMount");
  }
  render() {
    console.log("Child - render");
    return (
      <div>
        <h1>This is Profile Class Component</h1>
      </div>
    );
  }
}

export default Profile;
