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
// app.get('/',(red, res) => { res.send("Index 1.0") })
app.get('/', (req, res) => { res.render('home/index')})

// outros
app.listen(port, () => { console.log(`server runnin is http://localhost:${port}`) })
