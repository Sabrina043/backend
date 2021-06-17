const express = require('express')
const expressValidator = require("express-validator");
// const passwordValidator = require('password-validator');

const app = express();

app.use(express.json());

app.post('/signup',
    
    expressValidator.body("username"), ("Email"), ("Age"), ("userCity") .custom (value => {

        var schema = new expressValidator
        
        schema

        // username
        is().max(4)

        // Email
        has().lenght(10)
        has().symbole(1)

        // AGE
        is().max(2)

        // userCity
        has() .lenght(10)


        return schema.validate(value);
    })

    














    // expressValidator.body("password"). custom((value) =>{

    //     var schema = new passwordValidator();

    //     schema

    //     is()
    //     is()
    //     Has()
    //     Has()
    //     Has()
    //     Has()
    // })
)



