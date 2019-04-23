const path = require("path");
const merge = require("webpack-merge");
const baseConfig = require("./webpack.base.js");
const webpackNodeExternals = require("webpack-node-externals");

const config = {
  // Inform webpack that we're building
  // a bundle for nodeJS, rather than
  // for the browser (default)
  target: "node",

  // Tell webpack the root file of
  // our server application
  entry: "./src/index.js",

  // Tell webpack where to put
  // the generated output file
  output: {
    filename: "bundle.js",
    // __dirname = current working directory
    // Auto creates a build folder for us
    path: path.resolve(__dirname, "build")
  },
  externals: [webpackNodeExternals()]
};

// Merges the babel transpilation module with our server config
module.exports = merge(baseConfig, config);
