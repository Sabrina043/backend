const express = require('express');
const cors = require('cors');
const{students}= require('./datastudents')
const app = express()

app.use(express.json())
app.use(cors())


const port = 8000;

app.get(`./student/`,(req, res)=>{

    res.json(datastudents)

})

app.get(`./post/student/`)






app.json(port,()=>{console.log("server à l'ecoute dans le port" + port)})

