const mongoose = require('mongoose')
const LogacSchema = new mongoose.schema({
    name: String,
    email: String,
    password: String
})
const LogacModel = mongoose.model ("Logac", LogacSchema)
module.exports = LogacModel