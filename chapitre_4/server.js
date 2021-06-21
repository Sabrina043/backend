const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const { userRoutes } = require("./routes/usersroutes");
const { debug } = require("./middlewares/debug")

mongoose.connect("mongodb://localhost:27017/validationDB", { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
    if (err) {
        console.error(err);
    } else {
        console.log("I'm connected to the database")
    }
})

const port = 8000

const app = express()

app.use(cors())

app.use(express.json())



app.get("/", userRoutes)


app.listen(port, () => {
    console.log("Server is listening at port ", port);
})