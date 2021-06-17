const mongoose = require('mongoose')
const userModel = require("./model/usermodel")

mongoose.connect("mongodb://localhost:27017/usersDB", (err) => {

    if (err) {
        console.error(err);

    } else {
        console.log("je suis conecter a ma database")
    }
})

const addUsers = async () => {

    try{
        await userModel.deleteMany({})

        const user = await userModel.insertMany([

            {
                ville: "Paris"
            }
            {
                ville: "los Angeles"
            }
            {
                ville: "Tokyo"
            }

        ])
        
        console.log("user", user)

        await userModel.insertMany([

            {
                name: "Sabrina",
                email: "sabrina@sabrina.fr",
                age:28,
                ville: "Paris"
            }
            {
                name: "Asma",
                email: "asma@asma.fr",
                age: 24,
                ville: "Tokyo"
            }
            {
                name: "Rocio",
                email: "rocio@rocio.fr",
                age: 26,
                ville: "Los Angeles"
            }
        ])
    }

} 