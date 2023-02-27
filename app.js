const express = require('express')
const morgan = require('morgan')
const expressLayouts = require('express-ejs-layouts')
const homeRoutes = require('./routes/homeRoutes')
const path = require('path')
const mongoose = require('mongoose')
const Product = require('./models/products')

const app = express()

const dbURL = "mongodb+srv://mcant:tacakademi123@tacakademi.dl1er5w.mongodb.net/TacAkademi?retryWrites=true&w=majority"
mongoose.set('strictQuery', true)
mongoose.connect(dbURL, {useNewUrlParser: true, useUnifiedTopology: true})
.then((result) => app.listen(8000))
.catch((err) => console.log(err))

app.set('view engine', 'ejs')

app.use(express.static(path.join(__dirname, 'assets')))
app.use(express.urlencoded({extended: true}))
app.use(morgan('dev'))


app.get('/', function(req, res){
    res.render('index', {title: 'Ana Sayfa'})
})

app.get('/hakkimizda', function(req, res){
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

app.get('/urunler/:id', (req, res) => {
    const id = req.params.id

    Product.findById(id).then((result) => {
        res.render('single-product', {title: 'Ürün Detayı', product: result})
    })
    .catch((err) => {
        console.log(err)
    })
})

app.get('/admin', (req, res) => {
    Product.find().sort({createdAt: -1})
    .then((result) => {
        res.render('admin', {title: 'Admin Paneli', products: result})
    })
    .catch((err) => {
        console.log(err)
    })
})

app.get('/admin/add', (req, res) => {
    res.render('add', {title: 'Ürün Ekle'})
})

app.post('/admin/add', (req,res) => {
    const product = new Product(req.body)

    product.save().then((result) => {
        res.redirect('/admin')
    }).catch((err) => {
        console.log(err)
    })
})

app.delete('/admin/delete/:id', (req, res) => {
    const id = req.params.id
    Product.findByIdAndDelete(id).then((result) => {
        res.json({link: '/admin'})
    }).catch((err) => {
        console.log(err)
    })
})


app.use((req,res) => {
    res.status(404).render('404', {title: '404 Not Found'})
})

