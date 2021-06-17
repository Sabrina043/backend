const validation = require("../model/users")
const { findUsers } = require("../utils/usersfunction")

const sendUsersList = async (req, res) => {

    try{
        const user = await usersModel.find().populate() .select ({

            userName: 10,
            email: 10,
            age: 2,
            ville: (Paris, Tokyo, LosAngeles)

            
        })
    }

}



