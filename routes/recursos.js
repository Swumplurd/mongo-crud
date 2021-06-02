const express = require('express');
const route = express.Router();

const recursoControlador = require('../control/recursoControlador');

route.get('/', recursoControlador.mostrar);

route.post('/create', (req, res) => {
    res.send('Peticion POST para insersion de registros');
});

route.post('/update', (req, res) => {
    res.send('Peticion POST para actualizar registros');
});

route.get('/delete/:id', (req, res) => {
    res.send('Peticion GET para eliminar registros')
});

module.exports = route;