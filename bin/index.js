const express = require('express')
const app = express()
const handlebars = require('express-handlebars')
const path = require('path')
const port = 8000

// config
app.engine('handlebars',handlebars({defaultLayout:'main'}))
app.set('view engine','handlebars')

// public
app.use(express.static(path.join(__dirname,'../public')))

// rotas
app.get('/', (req, res) => { res.render('home/index')})
app.get('/sobre', (req, res) => { res.render('home/sobre')})
app.get('/servicos', (req, res) => { res.render('home/servicos')})
app.get('/contato', (req, res) => { res.render('home/contato')})

// outros
app.listen(port, () => { console.log(`server runnin is http://localhost:${port}`) })
