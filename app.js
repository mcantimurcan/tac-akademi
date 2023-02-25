const express = require('express')
const app = express()

app.use(express.static('assets'))
app.set('view engine', 'ejs')

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

app.listen(8000)