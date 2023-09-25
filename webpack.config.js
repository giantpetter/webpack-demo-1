const path = require("path");

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { WebpackManifestPlugin } = require("webpack-manifest-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

console.log(MiniCssExtractPlugin);
module.exports = {
  entry: path.resolve(__dirname, "./src/index.js"),
  mode: "production",
  performance: {
    hints: false,
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[contenthash].js",
    clean: true,
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css",
      chunkFilename: "[id].[contenthash].css",
    }),
    new WebpackManifestPlugin({}),
    new HtmlWebpackPlugin({
      title: "huan",
      template: "./src/index.html",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: "file-loader",
          },
        ],
      },
    ],
  },
};
