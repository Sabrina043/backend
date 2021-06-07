const mongoose = require('mongoose')

mongoose.connect("mongodb://localhost:27017/garage", (err) => {
    if (err) {
        console.error(err)
    } else {
        console.log("I'm connected to the database");
    }
})


const garageSchema = mongoose.Schema({
    brand: String,
    model: String,
    year: Number,
    created: Date
})

const Cars = mongoose.model("Cars", garageSchema)

// const mycars = new Cars ({
//     brand:"Renault",
//     model: "Espace",
//     year: 1999
// })

// const mycars = new Cars ({
//     brand:"Renault",
//     model: "Scenic",
//     year: 2004
// })

const mycars = new Cars ({
    brand:"Peugeot",
    model: "308",
    year: 2017
})

mycars.save()
