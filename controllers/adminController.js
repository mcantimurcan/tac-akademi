const Product = require('../models/products')

const admin_index = (req, res) => {
    Product.find().sort({createdAt: -1})
    .then((result) => {
        res.render('admin', {title: 'Admin Paneli', products: result})
    })
    .catch((err) => {
        console.log(err)
    })
}

const admin_add = (req, res) => {
    res.render('add', {title: 'Ürün Ekle'})
}

const admin_add_product = (req,res) => {
    const product = new Product(req.body)

    product.save().then((result) => {
        res.redirect('/admin')
    }).catch((err) => {
        console.log(err)
    })
}

const admin_delete_post = (req, res) => {
    const id = req.params.id
    Product.findByIdAndDelete(id).then((result) => {
        res.json({link: '/admin'})
    }).catch((err) => {
        console.log(err)
    })
}

module.exports = {
    admin_index,
    admin_add,
    admin_add_product,
    admin_delete_post
}