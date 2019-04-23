// const express = require("express");
// const React = require("react");
// const renderToString = require("react-dom/server").renderToString;
// const Home = require("./client/components/Home").default;

// Because we are transpiling code with webpack/Babel,
// We can just use ES2015 syntax instead of CommonJS
import "babel-polyfill";
import express from "express";
import renderer from "./helpers/renderer";
import createStore from "./helpers/createStore";

const app = express();

app.use(express.static("public"));
// Consider ALL routes in the application
app.get("*", (req, res) => {
  const store = createStore();

  // Some logic to initialized
  // and load data into store

  res.send(renderer(req, store));
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
