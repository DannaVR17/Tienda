const juguete = require('../models/jugueteModels');

async function getAllShirts() {
  return await juguete.find();
}

async function getShirtById(id) {
  return await juguete.findById(id);
}

async function createShirt(data) {
  const juguete = new juguete(data);
  return await juguete.save();
}

async function updateShirt(id, data) {
  return await juguete.findByIdAndUpdate(id, data, { new: true });
}

async function deleteShirt(id) {
  return await juguete.findByIdAndDelete(id);
}

module.exports = {
  getAllShirts,
  getShirtById,
  createShirt,
  updateShirt,
  deleteShirt
};
