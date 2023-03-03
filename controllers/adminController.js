const Product = require('../models/products')
const Admin = require('../models/admin')

const admin_index = (req, res) => {
    res.render('admin/adminHome')
}

const admin_products = (req, res) => {
    Product.find().sort({createdAt: -1})
    .then((result) => {
        res.render('admin/adminProducts', {title: 'Admin Paneli', products: result})
    })
    .catch((err) => {
        console.log(err)
    })
}

const admin_add = (req, res) => {
    res.render('admin/add', {title: 'Ürün Ekle'})
}

const admin_add_product = (req,res) => {
    const product = new Product(req.body)

    product.save().then((result) => {
        res.redirect('/admin/products')
    }).catch((err) => {
        console.log(err)
    })
}

const admin_delete_post = (req, res) => {
    const id = req.params.id
    Product.findByIdAndDelete(id).then((result) => {
        res.json({link: '/admin/products'})
    }).catch((err) => {
        console.log(err)
    })
}

const add_new_admin_page = (req, res) => {
    Admin.find().sort({createdAt: -1})
    .then((result) => {
        res.render('admin/addadmin', {title: 'Admin Paneli', admins: result})
    })
    .catch((err) => {
        console.log(err)
    })
}

const add_new_admin = (req, res) => {
    const admin = new Admin(req.body)

    admin.save().then((result) => {
        res.redirect('/admin/addadmin')
    }).catch((err) => {
        console.log(err)
    })
}

module.exports = {
    admin_index,
    admin_products,
    admin_add,
    add_new_admin,
    add_new_admin_page,
    admin_add_product,
    admin_delete_post
}