const express = require('express')
const cors = require("cors")
const mongoose = require('mongoose')
const {Hotel, Restaurant} =require("./model_trippy")

const app = express()
app.use(express.json())
app.use(cors())

const port = 8002

app.listen(port, () => {
        console.log("Mon port est à l'ecoute sur le port :" + port)
});
