const mongoose = require('mongoose');

// Esquema para Camisa
const camisaSchema = new mongoose.Schema({
  nombre: String,
  talla: String,
  color: String,
  precio: Number
});
const Camisa = mongoose.model('Camisa', camisaSchema);

// Esquema para Alimento
const alimentoSchema = new mongoose.Schema({
  nombre: String,
  Peso: Number,
  edad_perro: String,
  precio: Number
});
const Alimento = mongoose.model('Alimento', alimentoSchema);

// Esquema para Bebida
const bebidaSchema = new mongoose.Schema({
  nombre: String,
  tipo: String,
  disponible: Boolean,
  precio: Number
});
const Bebida = mongoose.model('Bebida', bebidaSchema);

// Esquema para Juguete
const jugueteSchema = new mongoose.Schema({
  nombre: String,
  categoria: {
    type: String,
    enum: ['Acción', 'Educativo', 'Peluches', 'Vehículos', 'Construcción']
  },
  edadRecomendada: String,
  color: String,
  precio: Number
});
const Juguete = mongoose.model('Juguete', jugueteSchema);

// Esquema para Rapida
const rapidSchema = new mongoose.Schema({
  nombre: String,
  descripcion: String,
  calorias: Number,
  precio: Number
});
const Rapida = mongoose.model('Rapida', rapidSchema);

// Esquema para Producto
const productoSchema = new mongoose.Schema({
  nombre: String,
  marca: String,
  precio: Number,
  cantidad: Number,
  descripcion: String
});
const Producto = mongoose.model('Producto', productoSchema);

// Exportar todos los modelos
module.exports = {
  Camisa,
  Alimento,
  Bebida,
  Juguete,
  Rapida,
  Producto
};
