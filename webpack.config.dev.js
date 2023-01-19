const { merge } = require("webpack-merge");
const ReactRefreshPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const common = require("./webpack.config");

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    port: 3001,
    hot: true,
  },
  plugins: [new ReactRefreshPlugin()],
});
