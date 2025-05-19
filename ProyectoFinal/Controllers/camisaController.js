const Camisa = require('../models/camisaModels');

async function getAllShirts() {
  return await Camisa.find();
}

async function getShirtById(id) {
  return await Camisa.findById(id);
}

async function createShirt(data) {
  const camisa = new Camisa(data);
  return await camisa.save();
}

async function updateShirt(id, data) {
  return await Camisa.findByIdAndUpdate(id, data, { new: true });
}

async function deleteShirt(id) {
  return await Camisa.findByIdAndDelete(id);
}

module.exports = {
  getAllShirts,
  getShirtById,
  createShirt,
  updateShirt,
  deleteShirt
};
