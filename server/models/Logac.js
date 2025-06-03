const mongoose = require('mongoose')
const LogacSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
})
const LogacModel = mongoose.model ("Logac", LogacSchema)
module.exports = LogacModel