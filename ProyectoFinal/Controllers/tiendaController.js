const {
  Camisa,
  Alimento,
  Bebida,
  Juguete,
  Rapida,
  Producto
} = require('../models/tiendaModels');

// Controllers for Camisas
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

// Controllers for Alimentos
async function getAllalimento() {
  return await Alimento.find();
}

async function getalimentoById(id) {
  return await Alimento.findById(id);
}

async function createAlimento(data) {
  const alimento = new Alimento(data);
  return await alimento.save();
}

async function updateAlimento(id, data) {
  return await Alimento.findByIdAndUpdate(id, data, { new: true });
}

async function deleteAlimento(id) {
  return await Alimento.findByIdAndDelete(id);
}

// Controllers for Bebidas
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

// Controllers for Productos
async function getAllProductos() {
  return await Producto.find();
}

async function getProductoById(id) {
  return await Producto.findById(id);
}

async function createProducto(data) {
  const producto = new Producto(data);
  return await producto.save();
}

async function updateProducto(id, data) {
  return await Producto.findByIdAndUpdate(id, data, { new: true });
}

async function deleteProducto(id) {
  return await Producto.findByIdAndDelete(id);
}

// Controllers for Juguetes
async function getAllJugetes() {
  return await Juguete.find();
}

async function getJugetesById(id) {
  return await Juguete.findById(id);
}

async function createJugetes(data) {
  const juguete = new Juguete(data);
  return await juguete.save();
}

async function updateJugetes(id, data) {
  return await Juguete.findByIdAndUpdate(id, data, { new: true });
}

async function deleteJugetes(id) {
  return await Juguete.findByIdAndDelete(id);
}

// Controllers for Rapidas (renombradas a inglés)
async function getAllRapidas() {
  return await Rapida.find();
}

async function getRapidaById(id) {
  return await Rapida.findById(id);
}

async function createRapida(data) {
  const rapida = new Rapida(data);
  return await rapida.save();
}

async function updateRapida(id, data) {
  return await Rapida.findByIdAndUpdate(id, data, { new: true });
}

async function deleteRapida(id) {
  return await Rapida.findByIdAndDelete(id);
}


module.exports = {
  getAllShirts,
  getShirtById,
  createShirt,
  updateShirt,
  deleteShirt,
  getAllalimento,
  getalimentoById,
  createAlimento,
  updateAlimento,
  deleteAlimento,
  getAllBebida,
  getBebidaById,
  createBebida,
  updateBebida,
  deleteBebida,
  getAllProductos,
  getProductoById,
  createProducto,
  updateProducto,
  deleteProducto,
  getAllJugetes,
  getJugetesById,
  createJugetes,
  updateJugetes,
  deleteJugetes,
  getAllRapidas,
  getRapidaById,
  createRapida,
  updateRapida,
  deleteRapida
};
