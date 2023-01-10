import React from "react";
import ReactDOM from "react-dom";

const heading1 = React.createElement("h1", { id: "title" }, "Heading 1");

const heading2 = React.createElement("h2", { id: "title2" }, "Heading 2");

const div = React.createElement(
  "div",
  {
    id: "container",
  },
  [heading1, heading2]
);

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(div);
