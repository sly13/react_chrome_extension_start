const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: {
    popup: "./index.js",
    content: "./src/js/content.js"
  },
  devServer: {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Headers":
        "X-Requested-With, content-type, Authorization"
    }
  },
  //devtool: "source-map",
  output: {
    path: path.join(__dirname, "build"),
    filename: "[name].js"
  },
  module: {
    rules: [
      {
        test: /.jsx?$/,
        exclude: /(node_modules)/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["react", "es2015", "stage-0"]
            }
          }
        ]
      },
      {
        test: /\.(s*)css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: ["css-loader", "sass-loader"]
        })
      }
    ]
  },
  resolve: {
    extensions: [".js", ".jsx", ".css", ".scss"]
  },
  plugins: [
    new ExtractTextPlugin("popup.css"),
    new HtmlWebpackPlugin({
      inject: true,
      chunks: ["popup"],
      filename: "popup.html",
      template: "./index.html"
    }),
    new CopyWebpackPlugin([
      { from: "./src/manifest.json" },
      { from: "./binance_logo.png" },
      { from: "./src/css/content.css" },
      {
        context: "./materialize",
        from: "**/*",
        to: "./materialize/"
      },
      {
        context: "./src/icons",
        from: "**/*",
        to: "./icons/"
      }
      //{ context: "./src/assets", from: "icon-**", to: "assets" }
    ])
  ]
};
