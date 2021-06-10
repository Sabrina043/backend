const mongoose = require('mongoose')
const {Hotel, Restaurant} = require("./model_trippy")



mongoose.connect('mongodb://localhost:27017/trippy_basics', (err) => {

    if (err) {

        console.error(err);

    } else {

        console.log('je suis dans ma database');
    }

})


const addHotel = async () => {

    try {

        await Hotel.deletMany({})

        await Hotel.insertMany([{

            name: "villa jardin  de l'ocean",
            address: "Chemin de la Plage Quartier Tamawanza, Agadir 80000 Maroc",
            city: "Agadir",
            country: "Maroc",
            stars: 5,
            hasSpa: true,
            hasPool:  true,
            priceCategory: 2
        }
        ])
        console.log("The collection hotel was recreated with the base data");
    }catch (err) {
        console.error(err)
    }


}

addHotel()



const addRestaurant = async () => {

    try {

        await Restaurant.deletMany({})

        await Restaurant.insertMany([{

            name: "les pâtes vivantes",
            address: "3 rue de turbigo - 75001",
            city: "Paris",
            country: "France",
            stars: 4,
            cuisine: "asiatique",
            priceCategory: 2
        }
        ])
        console.log("La collection Restaurant a été recréé avec les données de base");
    }catch (err) {
        console.error(err)
    }


}

addRestaurant()

