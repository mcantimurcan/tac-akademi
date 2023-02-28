const Product = require('../models/products')

const show_products = (req, res) => {
    Product.find().sort({createdAt: -1})
    .then((result) => {
        res.render('user/products', {title: 'Ürünlerimiz', products: result})
    })
    .catch((err) => {
        console.log(err)
    })
}

const show_product_by_id = (req, res) => {
    const id = req.params.id
    Product.findById(id).then((result) => {
        res.render('user/single-product', {title: 'Ürün Detayı', product: result})
    })
    .catch((err) => {
        console.log(err)
    })
}

module.exports = {
    show_products,
    show_product_by_id
}