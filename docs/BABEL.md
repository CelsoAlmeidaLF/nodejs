## CONFIG BABEL

Arquivo `.babelrc`

```sh

$ touch .babelrc

```

Código padrão utilizado.

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
