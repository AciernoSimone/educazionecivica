var express = require('express');
var router = express.Router();
var cors = require ('cors');

const MongoClient = require('mongodb').MongoClient;
const uri = 'mongodb+srv://simoneacierno:Gattone324@cluster0.ccutz.mongodb.net/WBL?retryWrites=true&w=majority';

/* GET */
router.get('/', function (req, res, next) {
    
});

module.exports = router;