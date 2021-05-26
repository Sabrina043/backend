var express = require('express');
var app = express();

var port = 8000;



app.get('https://restcountries.eu/rest/v2/name/' + country), function (req, res) {

    var country = req.params.restcountries;
    // var name: ;
    // var capital: ;
    // var flag: ;
    // var population: ;
    // var region: ;

    console.log('req', req)
    console.log('res', res)
    res.send('https://restcountries.eu/rest/v2/name/' + country)

};

app.listen(port, fonction())