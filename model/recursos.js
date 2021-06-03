const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const recursoSchema = new Schema ({
    name: String,
    url: String,
    category: String,
    description: String
}, {versionKey:false});
module.exports = mongoose.model('recurso', recursoSchema);