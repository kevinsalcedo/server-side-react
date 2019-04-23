const express = require("express");
const React = require("react");
const renderToString = require("react-dom/server").renderToString;
const Home = require("./client/components/Home").default;
const app = express();

app.get("/", (req, res) => {
  // Convert the raw HTML from a cmpnt to a string
  const content = renderToString(<Home />);

  // Take the string and send it back to whoever made the req
  res.send(content);
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
