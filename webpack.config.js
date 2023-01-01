const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CSSPlugin = require("@modular-css/webpack/plugin");

module.exports = {
  entry: path.join(__dirname, "src", "App.jsx"),
  output: {
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.(js(x*))$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.((s*)css|sass)$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|jp(e*)g|svg|gif)$/,
        use: ["file-loader"],
      },
      {
        test: /.css$/,
        use: "@modular-css/webpack/loader",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "index.html"),
    }),
    new CSSPlugin({
      css: "./output.css",
      json: "./output.json",
    }),
  ],
  mode: "development",
}