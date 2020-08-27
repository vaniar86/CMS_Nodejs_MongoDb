const express = require("express");
const mongoose = require('mongoose');
const path = require('path');
const conect = require ('./config/config_db');


const app = express();

// const indexRoutes = require('./routes/index_home');

// Conexion a DatBase
mongoose.connect(`mongodb:\/\/${conect.mongo.host}\/${conect.mongo.db}`, { useNewUrlParser: true })
        .then(res => console.log('Mongodb connected Successfully ')) 
        .catch (err => console.log(err));


// Settings
app.set('port', process.env.PORT || 3000);  
app.set('view engine', 'ejs');


// MiddleWeares
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/', (res,req) => {
    res.render('./home/index');
});

// Start The Server
app.listen(app.get('port'), () =>{
    console.log(`Server on port ${app.get('port')} `)
});
