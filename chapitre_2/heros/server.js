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
})


app.listen(8000, function(){

    console.log("server started");

})


