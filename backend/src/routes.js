const express = require('express');
const multer = require('multer');

const uploadConfig = require('./congif/upload');
const sessionController = require('./controllers/SessionController');
const SpotController = require('./controllers/SpotController');
const DashboardController = require('./controllers/DashboardController');
const BookingController = require('./controllers/BookingController');

const routes = express.Router();
const upload = multer(uploadConfig);

// req.query = Acessar query params (para filtro)
// req.params = Acessar route params (para editar, deletar)
// req.body = Acessar corpo da requisição (criação e ou edição)
routes.post('/sessions', sessionController.store);

routes.get('/spots', SpotController.index);

//Como terceiro parametro, pasando o upload/multer
routes.post('/spots', upload.single('thumbnail') ,SpotController.store);

routes.get('/dashboard', DashboardController.show);

routes.post('/spots/:spot_id/bookings', BookingController.store);

module.exports = routes;

