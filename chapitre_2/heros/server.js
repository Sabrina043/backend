const express = require('express');
const cors = require('cors');
const{superHeros}= require('./dataheros')
const app = express()

// je ne sais plus si je doit mettre app.use(express()) ou pas...
// const port = 8000;Non plus...
// app.get('/dataheros',(req, res)=>{ res.json(superHeros)}) ça pareille


app.use(cors())

app.use(function(req,res,next){
    
    console.log(superHeros());

});

app.get("/", function(req,res){

    console.log("dataheros");
    res.send("dataheros")

})


app.listen(8000, function(){

    console.log("server started");

})


