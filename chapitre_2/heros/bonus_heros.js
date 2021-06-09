const mongoose = require('mongoose')

mongoose.connect("mongodb://localhost:27017/heros", (err) => {
    if (err) {
        console.error(err);
    } else {
        console.log("I'm connected to the database")
    }
})

const herosSchema = new mongoose.Schema({
    name: String,
    power: [String],
    color: String,
    isAlive: Boolean,
    age: Number,
    image: String
})

const Heroes = mongoose.model("heroes", herosSchema)

module.exports = bonus_heros




