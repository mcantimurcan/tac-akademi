const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const path = require('path')
const homeRoutes = require('./routes/homeRoutes')
const mongoose = require('mongoose')
const Product = require('./models/products')

const app = express()

const dbURL = "mongodb+srv://mcant:tacakademi123@tacakademi.dl1er5w.mongodb.net/TacAkademi?retryWrites=true&w=majority"
mongoose.set('strictQuery', true)
mongoose.connect(dbURL, {useNewUrlParser: true, useUnifiedTopology: true})
.then((result) => app.listen(8000))
.catch((err) => console.log(err))


app.set('view engine', 'ejs')
app.use(express.static('assets'))


app.get('/', function(req, res){
    res.render('index', {title: 'Ana Sayfa'})
})

app.get('/about', function(req, res){
    res.render('about', {title: 'Hakkımızda'})
})

app.get('/girisyap', function(req, res){
    res.render('login', {title: 'Giriş Yap'})
})

app.get('/uyeol', function(req, res){
    res.render('signup', {title: 'Kayıt Ol'})
})

app.get('/urunler', function(req, res){
    Product.find().sort({createdAt: -1})
    .then((result) => {
        res.render('products', {title: 'Ürünlerimiz', products: result})
    })
    .catch((err) => {
        console.log(err)
    })
})

app.use((req,res) => {
    res.status(404).render('404', {title: '404 Not Found'})
})

