// const express = require("express");
// const React = require("react");
// const renderToString = require("react-dom/server").renderToString;
// const Home = require("./client/components/Home").default;

// Because we are transpiling code with webpack/Babel,
// We can just use ES2015 syntax instead of CommonJS
import express from "express";
import React from "react";
import { renderToString } from "react-dom/server";
import Home from "./client/components/Home";

const app = express();

app.use(express.static("public"));
app.get("/", (req, res) => {
  // Convert the raw HTML from a cmpnt to a string
  const content = renderToString(<Home />);

  // Tells the browser that we need to fetch the client's bundle.js
  const html = `
    <html>
    <head></head>
    <body>
    <div id="root">${content}</div>
    <script src="/bundle.js"></script>
    </body>
    </html>
  `;

  res.send(html);
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
