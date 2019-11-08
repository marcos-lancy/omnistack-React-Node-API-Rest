const express = require('express');
const mongoose = require('mongoose');

const routes = require('./routes');

const app = express();

mongoose.connect('mongodb://localhost:27017/aircnc', { 
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
});

//Avisar ao express que vamos usar JSON
app.use(express.json());

//Arquivo que responde por pelas entradas das requisições
app.use(routes);

app.listen(3333);   
