const express = require('express');
const cors = require('cors');
const{superHeros}= require('./dataheros')
const app = express()

const port = 8000;
// app.get('/dataheros',(req, res)=>{ res.json(superHeros)}) ça pareille


app.use(express())
app.use(cors())

app.use((req,res,next) => {
    
    console.log(next());
    

});

app.get("/hero/dataheros",(req,res) =>{

    res.json("dataheros");
    // res.send("")

})


// app.listen(8000, function(){

//     console.log("server started");

// })


