const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: {
    popup: "./index.js",
    content: "./src/js/content.js"
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
      { from: "./src/css/content.css" }
      //{ context: "./src/assets", from: "icon-**", to: "assets" }
    ])
  ]
};
