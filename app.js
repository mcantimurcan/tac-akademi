const express = require('express')
const morgan = require('morgan')
const expressLayouts = require('express-ejs-layouts')
const productRoutes = require('./routes/productRoutes')
const adminRoutes = require('./routes/adminRoutes')
const adminAuthRoutes = require('./routes/adminAuthRouter')
const path = require('path')
const mongoose = require('mongoose')

const app = express()

const dbURL = "mongodb+srv://mcant:tacakademi123@tacakademi.dl1er5w.mongodb.net/TacAkademi?retryWrites=true&w=majority"
mongoose.set('strictQuery', true)
mongoose.connect(dbURL, {useNewUrlParser: true, useUnifiedTopology: true})
.then((result) => app.listen(8000))
.catch((err) => console.log(err))

app.set('view engine', 'ejs')

app.use(express.static('assets'))
app.use(express.static('vendor'))
app.use(express.urlencoded({extended: true}))
app.use(morgan('dev'))

app.get('/', function(req, res){
    res.render('user/index', {title: 'Ana Sayfa'})
})

app.use('/admin' ,adminRoutes)
app.use('/urunler', productRoutes)
app.use(adminAuthRoutes)


app.get('/hakkimizda', function(req, res){
    res.render('user/about', {title: 'Hakkımızda'})
})

app.get('/girisyap', function(req, res){
    res.render('user/login', {title: 'Giriş Yap'})
})

app.get('/uyeol', function(req, res){
    res.render('user/signup', {title: 'Kayıt Ol'})
})

app.use((req,res) => {
    res.status(404).render('user/404', {title: '404 Not Found'})
})

