const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const routes = require('./routes');

const app = express();

mongoose.connect('mongodb://localhost:27017/aircnc', { 
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
});

//app.use(cors({ origin: 'http://localhost:3333' }));
app.use(cors());
//Avisar ao express que vamos usar JSON
app.use(express.json());

//Arquivo que responde por pelas entradas das requisições
app.use(routes);

app.listen(3333);   
