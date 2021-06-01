const express = require('express');
const { superHeros } = require('./dataheros')
const cors = require('cors');
const app = express()

const port = 8000;

app.use(express.json())
app.use(cors())



app.use((req, res, next) => {

    console.log("ma requete");

    next()
});



app.get("/heroes", (req, res) => {

    res.json(superHeros)
});



app.get("/heroes/:name", (req, res) => {

    const myHeroe = req.params.name
    // console.log(req.params.name);

    const dataHeroe = superHeros.find(elem => {

        return elem.name.toLowerCase() === myHeroe.toLowerCase()
    });

    if (myHeroe) {
        res.json({
            dataHeroe
        })
    }
});


app.get("/heroes/:name/powers", (req, res) => {

    const myHeroe = req.params.name

    const dataHeroe = superHeros.find(elem => {

        return elem.name.toLowerCase() === myHeroe.toLowerCase()
    });

    if (myHeroe) {
        res.json(
            dataHeroe.power
        )
    }
    
})

const transformName = (req, res, next) => {

    if (req.body.name === undefined) {
        res.json({
            erroMessage: "il faut envoyé un nom"
        })
    } else {
        req.body.name = req.body.name.toLowerCase()

        next()
    }

}


app.post("/heroes/:name", transformName, (req, res) => {

    const newHeroe = req.body

    superHeros.push(newHeroe)

    res.json({
        message : "ok hero ajouté",
        newHeroe
    })
})



app.listen(8000, function () {

    console.log("server started");

})


