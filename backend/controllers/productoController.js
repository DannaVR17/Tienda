const Producto = require('../models/productoModel');

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

module.exports = {
  getAllProductos,
  getProductoById,
  createProducto,
  updateProducto,
  deleteProducto
};
