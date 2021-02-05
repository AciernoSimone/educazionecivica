var express = require('express');
var router = express.Router();
var cors = require ('cors');
const MongoClient = require('mongodb').MongoClient; //Importo la libreria mongodb
const uri = "mongodb+srv://simoneacierno:Gattone324@cluster0.ccutz.mongodb.net/WBL?retryWrites=true&w=majority";

router.get('/', function (req, res, next) {
    
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    data = req.params.data;
    client.connect(err => {
        const collection = client.db("WBL").collection("WBL"); //Mi connetto alla collection movies
        // eseguo una find sulla collection
        collection.find().limit(500).toArray((err, result) => {
            if (err) console.log(err.message); //Se c'è qualche errore lo stampo
            else res.send(result);
            client.close(); //Quando ho terminato la find chiudo la sessione con il db
        }); //Eseguo la query e passo una funzione di callback

    });
});

module.exports = router;