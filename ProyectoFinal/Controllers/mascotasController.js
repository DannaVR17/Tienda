const Alimento = require('../models/mascotaModels');

async function getAllalimento() {
  return await Alimento.find();
}

async function getalimentoById(id) {
  return await Alimento.findById(id);
}

async function createAlimento(data) {
  const alimento = new Alimento(data);
  return await Alimento.save();
}

async function updateAlimento(id, data) {
  return await Alimento.findByIdAndUpdate(id, data, { new: true });
}

async function deleteAlimento(id) {
  return await Alimento.findByIdAndDelete(id);
}

module.exports = {
  getAllalimento,
  getalimentoById,
  createAlimento,
  updateAlimento,
  deleteAlimento
};
