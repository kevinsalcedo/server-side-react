// Startup point for the client side application
import React from "react";
import ReactDOM from "react-dom";
import Home from "./components/Home";

// "Hydrates", or puts functionality into the div
ReactDOM.hydrate(<Home />, document.querySelector("#root"));
