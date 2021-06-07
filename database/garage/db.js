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

const id = "60be1ba1523df9088c0114c7"

Cars.findById(id, function (err, doc) {
    if (err) {
        console.error(err)
    } else {
        console.log("je suis connecter à la base de donner");
    }
})

async function run() {
    
    const yearSchema = new mongoose.Schema({
        year: Number
    });

    const yearSchema = mongoose.model('year', yearSchema);

    yearSchema.watch().
    on('change', data => console.log(new Number(), data)) ;

    console.log(new Number(), "j'insert une new doc") ;
    await yearSchema.create({year: 2000}) ;
};




mycars.save()
