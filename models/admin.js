const mongoose = require('mongoose')
const bcypt = require('bcrypt')

const adminSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
})

adminSchema.pre('save', async function(next){
    const salt = await bcypt.genSalt()
    this.password = await bcypt.hash(this.password, salt)
    next()
})

const Admin = new mongoose.model('admin', adminSchema)

module.exports = Admin