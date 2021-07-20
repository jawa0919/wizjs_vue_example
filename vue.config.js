module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "./" : "/",
  configureWebpack: {
    devtool: "source-map"
  },
  devServer: {
    port: 9876,
    progress: true
  }
};
