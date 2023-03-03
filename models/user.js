const mongoose = require('mongoose')
const bcypt = require('bcrypt')

const userSchema = new mongoose.Schema({
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

userSchema.pre('save', async function(next){
    const salt = await bcypt.genSalt()
    this.password = await bcypt.hash(this.password, salt)
    next()
})

const User = new mongoose.model('admin', userSchema)

module.exports = User