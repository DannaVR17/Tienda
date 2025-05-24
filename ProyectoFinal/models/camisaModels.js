const mongoose = require('mongoose');

const shirtSchema = new mongoose.Schema({
  nombre: String,
  talla: String,
  color: String,
  precio: Number
});

module.exports = mongoose.model('Camisa', shirtSchema);
