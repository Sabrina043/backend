const mongoose = require('mongoose')



const HotelSchema = new mongoose.Schema({

    name: String,
    address:  String,
    city:  String,
    country:  String,
    stars:  Number,                 /*qui ira de 1 à 5*/
    hasSpa: Boolean,
    hasPool:  Boolean,
    priceCategory: Number           /*qui ira de 1 à 3*/

})

const Hotel = mongoose.model("hotel", HotelSchema)

module.exports = Hotel


const RestaurantSchema = new mongoose.Schema({

    name: String,
    address: String,
    city: String,
    country: String,
    stars: Number,                       /*qui ira de 1 à 5*/
    cuisine: String,
    priceCategory: Number               /*qui ira de 1 à 3*/

})


const Restaurant = mongoose.model("restaurant", RestaurantSchema)

module.exports = Restaurant