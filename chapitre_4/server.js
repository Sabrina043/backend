const express = require("express");
const expressValidator = require("express-validator");
// const passwordValidator = require('password-validator');

const app = express();

const port = 9001;


app.use(express.json());


router.get("/", sendValidation)



router.post("/users/add", add)


router.get("/users/:username", username)


router.get("/users/:email", email)


app.listen(port, () => {
    console.log("je suis à l'écoute sur le port: " + port);
});