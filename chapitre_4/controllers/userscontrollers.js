const userModel = require("../model/usermodel")
const { findUsers } = require("../utils/usersfunction")

const sendUsersList = async (req, res) => {

    try{
        const user = await usersModel.find().populate() .select ({

            userName: 10,
            email: 10,
            age: 2,
            ville: (Paris, Tokyo, LosAngeles)

            
        })
        res.json(user)
    } catch (err) {
        console.log(err)

        res.status(400).json({errorMessages: "il y a un problème..."})
    }

}



