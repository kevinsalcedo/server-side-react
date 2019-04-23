const path = require("path");

module.exports = {
  // Tell webpack the root file of
  // our server application
  entry: "./src/client/client.js",

  // Tell webpack where to put
  // the generated output file
  output: {
    filename: "bundle.js",
    // __dirname = current working directory
    // Auto creates a public folder for us
    path: path.resolve(__dirname, "public")
  },

  // Tell webpack to run Babel on every
  // file it runs though
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: [
            "react",
            // handle async code
            "stage-0",
            // env - master preset
            // runs all different transform rules to meet
            // the requirements of the latest two versions
            // of all the most popular browsers
            ["env", { targets: { browsers: ["last 2 versions"] } }]
          ]
        }
      }
    ]
  }
};
