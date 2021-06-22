const express = require('express')
const mongoose = require('mongoose')
const userModel = require('./model/user')
const config = require('./config')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')


mongoose.connect("mongodb://localhost:27017/signup", (err) => {
    if (err) {
        console.error(err)
    } else {
        console.log("I'm connected to the database");
    }
})


const port = 9000

const app = express()

app.use(cors())
app.use(express.json())


app.use("/signup")


app.listen(port, () => {
    console.log(`J'écoute des requêtes sur le port ${port}`);
})