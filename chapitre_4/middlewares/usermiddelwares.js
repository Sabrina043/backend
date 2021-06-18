const { userExists } = require("../utils/userFunctions")

const continueIfUserExists = async (req, res, next) => {
    try {
        const nameUser = req.params.name

        const User = await userExists(nameUser)

        if (User) {
            next()
        } else {
            res.status(400).json({ errorMessage: "L'utilisateur n'a pas été trouvé" })
        }

    } catch (err) {
        console.error(err)

        res.status(500).json({ errorMessage: "il y a un probleme" })
    }
}

const continueIfUserDoesntExists = async (req, res, next) => {

    try {
        const userBody = req.body
        const user = await userExists(userBody.name)

        if (user) {
            res.status(400).json({
                message: "L'utilisateur existe déjà"
            })
        } else {
            next()
        }

    } catch (err) {
        console.error(err)

        res.status(500).json({ errorMessage: "il y a un probleme" })
    }
}

const transformName = (req, res, next) => {
    if (req.body.name === undefined) {
        res.json({
            errorMessage: "Pour ajouter un utilisateur, envoyez au moins son nom."
        })
    } else {
        req.body.name = req.body.name

        next()
    }
}

module.exports = {
    continueIfUserExists,
    continueIfUserDoesntExists,
    transformName
}