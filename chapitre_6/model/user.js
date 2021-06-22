const mongoose = require('mongoose')


const userSchema = new mongoose.Schema({

    userName: String,
    passWord: String
    
})

const user = new mongoose.model('userModel', userSchema)

module.exports = user





