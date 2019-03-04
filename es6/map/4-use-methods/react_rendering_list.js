import React from "react";
import ReactDOM from "react-dom";

const names = ["john", "sean", "mike", "jean", "chris"];

const NamesList = () => (
  <div>
    <ul>{names.map(name => <li key={name}> {name} </li>)}</ul>
  </div>
);

const rootElement = document.getElementById("root");
ReactDOM.render(<NamesList />, rootElement);