const express = require('express')
const cors = require("cors")
const mongoose = require('mongoose')
const {Hotel, Restaurant} =require("./model_trippy")

const app = express()
app.use(express.json())
app.use(cors())

const port = 8002

mongoose.connect('mongodb://localhost:27017/trippy_basics', (err) => {

    if (err) {

        console.error(err);

    } else {

        console.log('je suis dans ma database');
    }

})

app.get("/hotels", (req, res) => {
    res.json()
})

app.listen(port, () => {
        console.log("Mon port est à l'ecoute sur le port :" + port)
});
