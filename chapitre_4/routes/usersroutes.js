const express = require("express");
const router = express.router();
const {continueIfUserExists, continueIfUserDoesntExists, transformName} = require("../middlewares/usermiddelwares")

const {sendUserList} = require("../controllers/userController")

router.get("/", sendUserList)



router.post("/users/add", add)


router.get("/users/:username", username)


router.get("/users/:email", email)


app.listen(port, () => {
    console.log("je suis à l'écoute sur le port: " + port);
});

module.exports = {
    userRoutes: router,
    continueIfUserExists,
    continueIfUserDoesntExists,
    transformName
    
}