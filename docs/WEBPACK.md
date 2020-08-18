
## WEBPACK.CONFIG

   Novo arquivo
```sh

$ touch webpack.config.js

```

  Código-fonte padrão do arquivo `webpack.config.js`
```js

const path = require('path');

module.exports = {
  entry: "./src/index.js",
  output: {
    filename:'main.js',
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [ ],
  module: { }
}

```
