// Dans le même dossier, codez un programme en `js` (dans un nouveau fichier `callAPI.js`), 
// qui, à l'aide du module `request`, fera une requête de type GET à notre 
// API pour récupérer la liste de pays et qui en suite l'affiche dans le terminal *dans l'ordre inverse*.

var request = require("request");

request.get("http://localhost:8000/countries", function (err, res, body) {
    
    console.log(JSON.parse(body).reverse());
});