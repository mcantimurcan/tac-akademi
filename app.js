const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const path = require('path')
const homeRoutes = require('./routes/homeRoutes')

const app = express()

app.set('view engine', 'ejs')

app.use(express.static('assets'))
app.use(homeRoutes.routes)

app.get('/', function(req, res){
    res.render('index')
})

app.get('/about', function(req, res){
    res.render('about')
})

app.get('/girisyap', function(req, res){
    res.render('login')
})

app.get('/uyeol', function(req, res){
    res.render('signup')
})

app.listen(8000, () => console.log('App is listening on url http://localhost:8000'))