# Comando `Express`

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

### Package Handlebars

Arquivos e diretorios necessarios para este projeto com `template handlebars`

```sh
# diretorios da template
$ mkdir views views/{home,layouts,partials}

# principais arquivos da template
$ touch home/index.handlebars layouts/main.handlebars partials/{_footer.handlebars,_header.handlebars}

# comando de instalação caso não tenha instalado
# o package express.handlebars
$ npm i -S express.handlebars

```
<br>

Rotas html e template `express.handlebars`

```js

// require handlebars
const handlebars = require('express-handlebars')

//config handlebars
app.engine('handlebars',handlebars({defaultLayout:'main'}))
app.set('view engine','handlebars')

// rotas para uma pagina html
app.get('/',(red, res) => {
  res.sendFile(
    path.join(__dirname,'../views/index.html'))
})

// rota para template handlebars
app.get('/', (req, res) => {
  res.render('home/index')
})

```
---
