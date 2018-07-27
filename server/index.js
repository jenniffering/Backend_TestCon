const express = require('express');
const app = express();
const { mongoose } = require('./database');

//settings
app.set('port', process.env.PORT || 3000);
//middlewares

//routes

//starting the server
app.listen(app.get('port'), () =>{
    console.log('Server on port ', app.get('port'));
});