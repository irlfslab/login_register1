const mongoose = require('mongoose')
const EmployeeSchema = new mongoose.schema({
    name: String,
    email: String,
    password: String
})
const EmployeeModel = mongoose.model ("employee", EmployeeSchema)
module.exports = EmployeeModel