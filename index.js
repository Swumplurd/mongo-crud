const express = require('express');
const morgan = require('morgan');
const path = require('path');
const fs = require('fs');
const app = express();
const port = 3000;

//Implementacion de logger morgan
var logs = fs.createWriteStream(path.join(__dirname, 'logs.log'), {flags: 'a'});
app.use(morgan('combined', {stream: logs}));

//Conexion a MongoDB
const db = require('./db');

//Motor de plantillas pug
app.set('view engine', 'pug');

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use('/static', express.static('public'));

//Implementacion de rutas
const routes = require('./routes/recursos');
app.use(routes);

app.listen(port, () => {
    console.log(`App escuchando en: http://localhost:${port}`);
})
