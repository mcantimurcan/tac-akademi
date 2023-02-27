const Admin = require('../models/admin')

const admin_login_get = (req, res) => {
    res.render('adminlogin')
}

const admin_login_post = (req, res) => {

}

const admin_logout = (req, res) => {

}

module.exports = {
    admin_login_get,
    admin_login_post,
    admin_logout
}