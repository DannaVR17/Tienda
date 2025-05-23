const mongoose = require('mongoose');

const jugueteSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true
  },
  categoria: {
    type: String,
    required: true,
    enum: ['Acción', 'Educativo', 'Peluches', 'Vehículos', 'Construcción']
  },
  edadRecomendada: {
    type: String,
    required: true
  },
  color: {
    type: String
  },
  precio: {
    type: Number,
    required: true,
    min: 0
  }
});

module.exports = mongoose.model('Juguete', jugueteSchema);
