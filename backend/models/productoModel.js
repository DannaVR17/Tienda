const mongoose = require('mongoose');

const productoSchema = new mongoose.Schema({
  nombre: String,
  marca: String,
  precio: Number,
  cantidad: Number,
  descripcion: String
});

module.exports = mongoose.model('Producto', productoSchema);
