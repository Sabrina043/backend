const mongoose = require('mongoose')
const Hotel = require("./trippy_basics")
const Restaurant = require("./trippy_basics")


mongoose.connect('mongodb://localhost:27017/hotelDB', (err) => {

    if (err) {

        console.error(err);

    } else {

        console.log('je suis dans ma database');
    }

})

mongoose.connect('mongodb://localhost:27017/restaurantDB', (err) => {

    if (err) {

        console.error(err);

    } else {

        console.log('je suis dans ma database');
    }

})


const addHotel = async () => {

    try {

        await hotel.deletMany({})

        await hotel.insertMany([{

            name: "villa jardin  de l'ocean",
            address: "Chemin de la Plage Quartier Tamawanza, Agadir 80000 Maroc",
            city: "Agadir",
            country: "Maroc",
            stars: 5,
            cuisine: "Marocaine",
            priceCategory: 2
        }
        ])

    }

}