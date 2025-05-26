const Bebida = require('../models/bebidaModels');

async function getAllBebida() {
  return await Bebida.find();
}

async function getBebidaById(id) {
  return await Bebida.findById(id);
}

async function createBebida(data) {
  const bebida = new Bebida(data);
  return await bebida.save();
}

async function updateBebida(id, data) {
  return await Bebida.findByIdAndUpdate(id, data, { new: true });
}

async function deleteBebida(id) {
  return await Bebida.findByIdAndDelete(id);
}

module.exports = {
  getAllBebida,
  getBebidaById,
  createBebida,
  updateBebida,
  deleteBebida
};
