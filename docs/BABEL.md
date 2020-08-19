## CONFIG BABEL

Novo arquivo `.babelrc`

```sh

$ touch .babelrc

```

Código-fonte `.babelrc`

```js

{
  "presets":[[
    "@babel/preset-env",
    { "targets": {
      "node": true
      }}
    ]],
  "plugins":[]
}

```
