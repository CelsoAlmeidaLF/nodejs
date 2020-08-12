const path = require('path');

module.exports = {
  mode:"development",
  entry: "",
  output: {
    filename:'main.js',
    path: path.resolve("./dist"),
  },
  devtool: 'source-map',
  module: {
    rules: []
  }
}
