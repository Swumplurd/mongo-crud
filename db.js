const mongoose = require('mongoose');
const uri = 'mongodb://localhost/db_recursos';

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Error en la conexion a MongoDB'));
db.once('open', function callback() {
    console.log("Conectado a MongoDB!");
});

module.exports = db;