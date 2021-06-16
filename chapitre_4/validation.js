const express = require('express')
const expressValidator = require("express-validator");
const passwordValidator = require('password-validator');

const app = express();

app.use(express.json());

app.post('/signup',
    
    expressValidator.body("username").custom(value => {

        var schema = new expressValidator
        
        schema

        is().max(4)

    }) 
    
    
    
    
    
    
    
    
    
    
    .isEmail() .isAge() .isCity() ,














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



