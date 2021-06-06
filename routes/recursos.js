const express = require('express');
const route = express.Router();

const recursoControlador = require('../control/recursoControlador');

route.get('/', recursoControlador.mostrar);

route.post('/create', recursoControlador.crear);

route.post('/update', recursoControlador.editar);

route.get('/delete/:_id', recursoControlador.borrar);

module.exports = route;