var express = require("express");
var datamoovice = require("./Apimoovice.json")

var app = express();

var port = 9001;

app.get("/datamoovice/all/", function (req, res) {
    res.json(datamoovice)
})

app.listen(port, function () {
    console.log(`Serveur à l'écoute dans le port ${port}`);
})