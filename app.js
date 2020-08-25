const express = require("express");
const mongoose = require('mongoose');
const path = require('path');


const app = express();

// const indexRoutes = require('./routes');

// Settings
app.set('port',process.env.PORT || 3000);  
app.set

// MiddleWeares
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Routes
// app.use('/', indexRoutes);

// Start The Server
app.listen(app.get('port'), () =>{
    console.log(`Server on port ${app.get('port')} `)
});
