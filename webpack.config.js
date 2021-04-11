const path = require("path");
const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const autoprefixer = require("autoprefixer");

const javascript = {
  test: /\.(js)$/,
  use: [
    {
      loader: "babel-loader",
      options: { presets: ["env"] },
    },
  ],
};

const postcss = {
  loader: "postcss-loader",
  options: {
    plugins() {
      return [autoprefixer({ browsers: "last 3 versions" })];
    },
  },
};

const styles = {
  test: /\.(scss)$/,
  // Don't pass an array of loaders, run them through the extract plugin so they can be outputted to their own .css file
  use: ExtractTextPlugin.extract([
    "css-loader?sourceMap",
    postcss,
    "sass-loader?sourceMap",
  ]),
};

// Plugin to compress the JS
const uglify = new webpack.optimize.UglifyJsPlugin({
  // eslint-disable-line
  compress: { warnings: false },
});

const config = {
  entry: {
    App: "./public/javascripts/node-app.js",
  },
  devtool: "source-map",
  output: {
    path: path.resolve(__dirname, "public", "dist"),
    // name `App` is used above in entry
    filename: "[name].bundle.js",
  },
  module: {
    rules: [javascript, styles],
  },
  plugins: [
    // Output css to a separate file
    new ExtractTextPlugin("style.css"),
    uglify
  ],
};
// webpack is cranky about some packages using a soon to be deprecated API.
process.noDeprecation = true;

module.exports = config;
