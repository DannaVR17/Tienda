const mongoose = require('mongoose');

const bebidaSchema = new mongoose.Schema({
  nombre: String,
  tipo: String,
  disponible: Boolean,
  precio: Number
});

module.exports = mongoose.model('Bebida', bebidaSchema);
