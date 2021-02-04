var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require ('cors');

var indexRoute = require('./routes/index');
var wblRoute = require('./routes/wbl');
var codeRoute = require('./routes/code');


var app = express();
app.use(new cors());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRoute);
app.use('/wbl', wblRoute);
app.use('/code', codeRoute);


module.exports = app;

