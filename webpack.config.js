const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/js/index.js',
  output: {
    filename:'scripts/main.js',
    path: path.resolve(__dirname, 'public'),
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [ MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader' ]
      },
      {
        test:/.\.js$/,
        exclude:/node_modules/,
        use: {
            loader: 'babel-loader',
            options: { presets:['@babel/preset-env'] }
        }
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'styles/main.css'
    })
  ]
};
