
# WEBPACK
<br>
  Novo arquivo: `webpack.config.js`

```sh

$ touch webpack.config.js

```
<br>
  Código do arquivo `webpack.config.js`

```js

const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename:'main.js',
    path: path.resolve(__dirname, 'dist'),
  }
};

```
<hr>

### Plugin-Html

  Comando de instalação do `html-webpack-plugin`.

```sh

$ npm i -D html-webpack-plugin

```
<br>

Código de configuração do `html-webpack-plugin`.

```js

const HtmlWebpackPlugin = require('html-webpack-plugin');

plugins: [
  new HtmlWebpackPlugin({
    filename: 'index.html',
    template: './src/index.html'
  })
]

```

<hr>

### Plugin-Css

  Comando de instalação do `mini-css-extract-plugin`.

```sh

$ npm i -D node-sass sass-loader style-loader css-loader mini-css-extract-plugin

```
<br>

  Código de configuração do `mini-css-extract-plugin`.

```js

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module: {
  rules: [
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
      use: [
        'style-loader',
        'css-loader'
      ]      
    }
  ]
},

plugins: [
  new MiniCssExtractPlugin({
    filename: 'style.css'
  })
]


```

<hr>

### Plugin-Babel

  Comando de instalação do plugin-babel.

```sh

$ npm i -D @babel/core babel-loader @babel/preset-env

```
<br>
Código de configuração do plugin-babel.

```js

module: {
  rules: [
    {
      test:/.\.js$/,
      exclude:/node_modules/,
      use: {
          loader: 'babel-loader',
          options: {
            presets:['@babel/preset-env']
          }
      }
    }
},

```
<hr>

### Plugin-Files

  Comando de instalação do plugin-files.

```sh

$ npm i -D file-loader

```
<br>

  Código de configuração do plugin-files.

```js

module: {
  rules: [
    {
      test:/\.(jpe?g|png|gif|svg)$/i,
      loader: 'file-loader',
      options: {
        name: '[name].[ext]'
      }
    }
},

```

<hr>
