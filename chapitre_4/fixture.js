const mongoose = require('mongoose')
const userModel = require("./model/usermodel")

mongoose.connect("mongodb://localhost:27017/usersDB", (err) => {

    if (err) {
        console.error(err);

    } else {
        console.log("je suis connecter à ma database")
    }
})

const addUsers = async () => {

    try{
        await userModel.deleteMany({})

        const user = await userModel.insertMany([

            {
                ville: "Paris"
            },
            {
                ville: "los Angeles"
            },
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
            },
            {
                name: "Asma",
                email: "asma@asma.fr",
                age: 24,
                ville: "Tokyo"
            },
            {
                name: "Rocio",
                email: "rocio@rocio.fr",
                age: 26,
                ville: "Los Angeles"
            },
        ])
        console.log("La collection user a été recréée avec les données de base.");

    } catch (err) {
        console.error();
    }

}

addUsers()


const showUser = async () => {
    try {
        const user = await heroModel.find({}).populate("")

        console.log("user", userModel);
        console.log("user1", user[1].userModel);

    } catch (error) {
        console.log(error)
    }
}

showUser()

