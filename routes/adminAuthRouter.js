const router = require('express').Router()
const adminAuthController = require('../controllers/adminAuthController')

router.get('/adminlogin', adminAuthController.admin_login_get)
router.post('/adminlogin', adminAuthController.admin_login_post)
router.get('/adminlogout', adminAuthController.admin_logout)

module.exports = router