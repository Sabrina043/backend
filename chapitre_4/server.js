const express = require("express");
const expressValidator = require("express-validator");
const passwordValidator = require('password-validator');

const app = express();

const port = 9001;


app.use(express.json());


app.get("/", (req, res) => {

    res.send()

})



app.post("/users/add", (req, res) => {

    res.send()

})


app.get("/users/:username", (req,res) => {

    res.send()

})


app.get("/users/:email", (req, res) => {

    res.send()

})


app.listen(port, () => {
    console.log("je suis à l'écoute sur le port: " + port);
});