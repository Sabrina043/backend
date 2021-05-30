const express = require('express');
const {superHeros} = require('./dataheros')
const cors = require('cors');
const app = express()

const port = 8000;

app.use(express.json())
app.use(cors())



app.use((req,res,next) => {
    
    console.log("ma requete");
    
    next()
});



app.get("/heroes",(req,res) =>{

    res.json(superHeros)
});



app.get("/heroes/:myHeroe",(req,res) =>{

    const myHeroe = req.params.myHeroe
    // res.json(`mon super heros ${myHeroe}`)

    const dataHeroe = superHeros.find(elem => {

        return elem.name.toLocaleLowerCase()=== myHeroe.toLocaleLowerCase()
    })
    res.json(dataHeroe)
});










app.listen(8000, function(){

    console.log("server started");

})


