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
            else { res.send(result); console.log(result); }
            client.close();
        });
    });
});

router.get('//name/:name', function (req, res, next) {
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    name = req.params.name;
    client.connect(err => {
        const collection = client.db("WBL").collection("WBL");
        collection.find({ 'WBL REPORT YEAR': `${name}` }).toArray((err, result) => {
            if (err) console.log(err.message);
            else { res.send(result); console.log(result); }
            client.close();
        });
    });
});

module.exports = router;