# Front-End Project

  Criação de front-end com nodejs

### Criação de diretórios
```sh

$ mkdir src public views views/{home,layouts,partials} public/{images,fonts,scripts,styles}

```
<br>

### Criação de arquivos
```sh

$ touch src/index.js .babelrc webpack.config.js gulpfile.js .gitignore README.md

```
<br>

### Inicialização de novo projeto
```sh

$ npm init -y && git init  

```
<br>

### Instalação de depencias
```sh

# produção
$ npm i -S express express-handlebars bootstrap popper.js jquery  

# desenvolvimento - webpack
$ npm i -D webpack webpack-cli webpack-dev-server

# desenvolvimento - babel
$ npm i -D @babel/cli @babel/core @babel/node @babel/preset-env

```
<hr>

### Comando `Express`
<br>

 Código fonte de `index.js`

```js

const express = require('express')
const app = express()
const port = 3000

/*
 *   Comandos de configuração, e
 *   Comandos de rotas
 */

// outros
app.listen(port, () => {
  console.log(`server runnin is http://localhost:${port}`)
})


```

<hr>

### Config Webpack
<br>

Novo arquivo `webpack.config.js`

```sh

# cria um novo arquivo webpack.
$ touch webpack.config.js

```
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
[+ `Webpack`](./docs/WEBPACK.md)
<hr>
