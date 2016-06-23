var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
// In the string below, add the database name after '27017/'
mongoose.connect('mongodb://localhost:27017/mongo-lecture');

var User = require('../models/user');

var app = express();

var server = app.listen(8080, function(){
  var port = server.address().port;
  console.log("server is listening on " + port);
});
