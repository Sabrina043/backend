// ## Exercice 1

// Créer un serveur qui, à la page d’accueil (la route `/`), renverra le message suivant :
// Authors API


const express = require('express');
const app = express();

const port = 8000;
app.listen(port, () => {
  console.log('Server started on port: ' + port);
});

app.get('/', (req, res) => {
    res.send('authorsapi');
  });