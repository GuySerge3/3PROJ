const { json } = require('body-parser');
const express = require('express');
const app = express();
const userRoutes = require('./routes/RoutesUser')

const mongosose = require('mongoose');



app.use('/', userRoutes);

mongosose.connect('mongodb+srv://guy1serge:guy1serge@cluster0.46epuns.mongodb.net/?retryWrites=true&w=majority');
app.use(express.json());


app.listen(3000, () =>{
    console.log('Votre app écoute sur le port 3000');

});