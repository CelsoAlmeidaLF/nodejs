
## WEBPACK

```js

const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const Webpack = require('webpack')

module.exports = {
  entry: "./src/scripts/index.js",
  output: {
    filename:'scripts/main.js',
    path: path.resolve(__dirname, "public"),
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "styles/css/style.css"
    }),
    new Webpack.ProvidePlugin({
      $:"jquery",
      jQuery:"jquery"
    }),
    new Webpack.SourceMapDevToolPlugin({})
  ],
  devtool: false,
  module: {
    rules:
    [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.css$/i,
        use: [ 'style-loader', 'css-loader' ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader:  'babel-loader',
          options: {
            presets: [ '@babel/preset-env' ]
          }
        }
      }
    ]
  }
}
