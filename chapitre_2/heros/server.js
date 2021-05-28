const express = require('express');
const cors = require('cors');
const{superHeros}= require('./dataheros')
const app = express()

const port = 8000;
app.get('/dataheros',(req, res)=>{ res.json(superHeros)}) 


app.use(express())
app.use(cors())

app.use((req,res,next) => {
    
    console.log();
    
    next()
});

app.get("/heros/dataheros/superHeros",(req,res) =>{
    
    res.json("dataheros");
    res.send("dataheros", req.params.name)

})


app.listen(8000, function(){

    console.log("server started");

})


