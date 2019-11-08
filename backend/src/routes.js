const express = require('express');
const multer = require('multer');

const uploadConfig = require('./congif/upload');
const sessionController = require('./controllers/SessionController');
const SpotController = require('./controllers/SpotController');

const routes = express.Router();
const upload = multer(uploadConfig);

// req.query = Acessar query params (para filtro)
// req.params = Acessar route params (para editar, deletar)
// req.body = Acessar corpo da requisição (criação e ou edição)
routes.post('/sessions', sessionController.store);

//Como terceiro parametro, pasando o upload/multer
routes.post('/spots', upload.single('thumbnail') ,SpotController.store);

module.exports = routes;

