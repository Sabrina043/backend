const userModel = require("../model/usermodel")

const findUser = async (email) => {
    try {
        if (email) {
            return await userModel.findOne({
                name: {
                    $regex: new RegExp("^" + user, "i")
                }
            }).populate("powers")
        } else {
            return await userModel.findOne({
                name: {
                    $regex: new RegExp("^" + user, "i")
                }
            }).select({ user: 0 })
        }

    } catch (error) {
        console.log(error)

        return null
    }
}

findUser()