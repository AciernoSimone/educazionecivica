var express = require('express');
var router = express.Router();
var cors = require ('cors');

const MongoClient = require('mongodb').MongoClient;
const uri = 'mongodb+srv://simoneacierno:Gattone324@cluster0.ccutz.mongodb.net/WBL?retryWrites=true&w=majority';


router.get('/', function (req, res, next) {
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    client.connect(err => {
        const collection = client.db("WBL").collection("WBL");
        collection.find({}).toArray((err, result) => {
            if (err) console.log(err.message);
            else { res.send(result); }
            client.close();
        });
    });
});

router.get('/wbl_search/:index/:year', function (req, res, next) {
    console.log(req.params); //Leggo i parametri passati all'url
    index = req.params.index;
    year = req.params.year;
    const uri = 'mongodb+srv://simoneacierno:Gattone324@cluster0.ccutz.mongodb.net/WBL?retryWrites=true&w=majority';
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    client.connect(err => {
        const collection = client.db("WBL").collection("WBL");
        // eseguo una find sulla collection
        collection.find({ 'WBL INDEX': `${index}` `${year}` }).toArray((err, result) => {
            if (err) console.log(err.message); //Se c'è qualche errore lo stampo
            else res.send(result);
            client.close(); //Quando ho terminato la find chiudo la sessione con il db
        }); //Eseguo la query e passo una funzione di callback

    });
});

module.exports = router;