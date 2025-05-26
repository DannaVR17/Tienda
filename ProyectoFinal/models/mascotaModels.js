const mongoose = require('mongoose');

const shirtSchema = new mongoose.Schema({
  nombre: String,
  Peso: Number,
  edad_perro: String,
  precio: Number
});

module.exports = mongoose.model('Alimento', shirtSchema);
