import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { renderRoutes } from "react-router-config";
import serialize from "serialize-javascript";
import Routes from "../client/Routes";

export default (req, store) => {
  // Convert the raw HTML from a cmpnt to a string
  const content = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.path} context={{}}>
        <div>{renderRoutes(Routes)}</div>
      </StaticRouter>
    </Provider>
  );

  // Tells the browser that we need to fetch the client's bundle.js
  // Serialize converts the arg into unicode characters to render
  // Prevents XSS attacks
  return `
    <html>
    <head></head>
    <body>
    <div id="root">${content}</div>
    <script>
      window.INITIAL_STATE=${serialize(store.getState())}
    </script>
    <script src="/bundle.js"></script>
    </body>
    </html>
  `;
};
