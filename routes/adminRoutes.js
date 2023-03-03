const express = require('express')
const router = express.Router()
const adminController = require('../controllers/adminController')

router.get('/', adminController.admin_index)
router.get('/products', adminController.admin_products)
router.get('/add', adminController.admin_add)
router.post('/add', adminController.admin_add_product)
router.get('/addadmin', adminController.add_new_admin_page)
router.post('/addadmin', adminController.add_new_admin)
router.delete('/delete/:id', adminController.admin_delete_post)


module.exports = router