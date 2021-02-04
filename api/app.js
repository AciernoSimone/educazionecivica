var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');

var indexRoute = require('./routes/index');
var wblRoute = require('./routes/wbl');
var wpRoute = require('./routes/wp');
var payRoute = require('./routes/pay');

var app = express();
app.use(new cors());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRoute);
app.use('/wbl', wblRoute);
app.use('/wp', wpRoute);
app.use('/pay', payRoute);



module.exports = app;

