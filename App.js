import React from "react";
import ReactDOM from "react-dom";

const heading1 = <h1 key="h1">Namaste React's h1 tag</h1>;

const HeaderComponent = () => {
  return (
    <div>
      {heading1}
      <h2>This is header component's h2 tag</h2>
    </div>
  );
};

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(<HeaderComponent />);
