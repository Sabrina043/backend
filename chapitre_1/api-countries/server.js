const express = require('express');
const app = express();

const port = 8000;
app.listen(port, () => {
  console.log('Server started on port: ' + port);
});

  app.get('/countries', function (req, res) {
    var pays =["Maroc", "ile de la réunion", "senegal", "algerie", "Egypte"];
    res.send(pays);
});
