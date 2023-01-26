const path = require("path");

module.exports = {
  mode: "production",
  entry: "./index.js",
  output: {
    filename: "bundle.js",
    library: "math",
    libraryTarget: "umd",
    globalObject: "this",
    path: path.resolve(__dirname, "dist"),
  },
};
