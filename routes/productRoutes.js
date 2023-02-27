const express = require('express')
const router = express.Router()
const productController = require('../controllers/productController')

router.get('/', productController.show_products)
router.get('/:id', productController.show_product_by_id)

module.exports = router