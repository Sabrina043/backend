const express = require('express');
const multer = require('multer');
const cors = require("cors")
const fs = require("fs");
const path = require("path");

const upload = multer({ dest: 'public/uploads/' });

const port = 8050

const app = express();

app.use(cors())

app.use(express.static('public'));

app.post("localhost:8000/img/konexio-logo_1.png") ({

    

})


