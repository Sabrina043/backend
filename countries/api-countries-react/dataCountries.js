var express = require('express');
var app = express();

var port = 8000;

app.get('https://restcountries.eu/rest/v2/name/' + country), function (req, res) {

    console.log('req', req)
    console.log('res', res)
    res.send('https://restcountries.eu/rest/v2/name/' + country)

}