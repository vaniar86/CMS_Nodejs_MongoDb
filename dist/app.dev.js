"use strict";

var express = require("express");

var mongoose = require('mongoose');

var path = require('path');

var app = express(); // const indexRoutes = require('./routes');
// Settings

app.set('port', process.env.PORT || 3000);
app.set; // MiddleWeares

app.use(express.urlencoded({
  extended: false
}));
app.use(express.json());
app.use(express["static"](path.join(__dirname, 'public'))); // Routes
// app.use('/', indexRoutes);
// Start The Server

app.listen(app.get('port'), function () {
  console.log("Server on port ".concat(app.get('port'), " "));
});