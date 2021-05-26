const express = require('express');
const cors = require('cors');
const{students}= require('./datastudents')
const app = express()

app.use(express.json())
app.use(cors())


const port = 8000;

app.get('/students',(req, res)=>{

    res.json(students)

})

app.post('/students', (req,res)=>{
    const newName = req.body

    students.push(newName)

    res.json({
        message: 'name added'
    })

})






app.listen(port,()=>{console.log("server à l'ecoute dans le port" + port)})
