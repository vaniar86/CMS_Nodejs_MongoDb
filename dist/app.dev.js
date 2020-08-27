"use strict";

var express = require("express");

var mongoose = require('mongoose');

var path = require('path');

var conect = require('./config/config_db');

var app = express(); // const indexRoutes = require('./routes/index_home');
// Conexion a DatBase

mongoose.connect("mongodb://".concat(conect.mongo.host, "/").concat(conect.mongo.db), {
  useNewUrlParser: true
}).then(function (res) {
  return console.log('Mongodb connected Successfully ');
})["catch"](function (err) {
  return console.log(err);
}); // Settings

app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs'); // MiddleWeares

app.use(express.urlencoded({
  extended: false
}));
app.use(express.json());
app.use(express["static"](path.join(__dirname, 'public'))); // Routes

app.use('/', function (res, req) {
  res.render('./home/index');
}); // Start The Server

app.listen(app.get('port'), function () {
  console.log("Server on port ".concat(app.get('port'), " "));
});