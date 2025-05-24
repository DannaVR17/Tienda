const mongoose = require('mongoose');
const rapidSchema = new mongoose.Schema({
    nombre: String,
    descripcion: String,
    calorias: Number,
    precio: Number,
});

module.exports = mongoose.model('Rapida', rapidSchema);