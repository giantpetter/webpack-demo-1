const path = require("path");

const MiniCssExtractPlugin = require("mini-css-extract-plugin");

console.log(MiniCssExtractPlugin);
module.exports = {
  entry: path.resolve(__dirname, "./src/index.js"),
  mode: "development",
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "main.js",
  },
  plugins: [new MiniCssExtractPlugin()],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["MiniCssExtractPlugin.loader", "css-loader"],
        // use: ["style-loader", "css-loader"],
      },
    ],
  },
};
