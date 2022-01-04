const HtmlWebpackPlugin = require("html-webpack-plugin");
__webpack_base_uri__ = "http://localhost:8081";
module.exports = {
  mode: "development",
  devServer: {
    port: 8081,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
