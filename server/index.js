const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const LogacModel = require('./models/Logac')

const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://127.0.0.1:27017/logac");

app.post("/login", (req, res) => {
    const {email, password} = req.body;
    LogacModel.findOne({email: email})
    .then (user => {
        if (user) {
            if (user.password === password) {
                res.json("Success")
            } else {
                res.json("Password is incorrect")
            }
        } else {
            res.json("Account not exist")
        }
    })
})

app.post('/register',(req, res) => {
    LogacModel.create(req.body)
    .then(logac => res.json(logac))
    .catch(err => res.json(err))
})

app.listen(3001, () => {
    console.log("server is running")
})