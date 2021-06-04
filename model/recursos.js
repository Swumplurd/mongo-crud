const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const recursoSchema = new Schema ({
    nombre: String,
    url: String,
    categoria: String,
    descripcion: String
}, {versionKey:false});
module.exports = mongoose.model('recurso', recursoSchema);