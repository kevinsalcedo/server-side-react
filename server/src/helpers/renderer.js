import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import Routes from "../client/Routes";

export default req => {
  // Convert the raw HTML from a cmpnt to a string
  const content = renderToString(
    <StaticRouter location={req.path} context={{}}>
      <Routes />
    </StaticRouter>
  );

  // Tells the browser that we need to fetch the client's bundle.js
  return `
    <html>
    <head></head>
    <body>
    <div id="root">${content}</div>
    <script src="/bundle.js"></script>
    </body>
    </html>
  `;
};
