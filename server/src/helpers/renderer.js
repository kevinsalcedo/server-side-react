import React from "react";
import { renderToString } from "react-dom/server";
import Home from "../client/components/Home";

export default () => {
  // Convert the raw HTML from a cmpnt to a string
  const content = renderToString(<Home />);

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
