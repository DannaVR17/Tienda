const { model } = require('mongoose');
const rapidasSchema = require('../models/rapidasModels');

async function conseguirTodasRapidas() {
    return await rapidasSchema.find();
}

async function conseguirRapidaPorId(id) {
    return await rapidasSchema.findById(id);
}

async function crearRapida(data) {
    const rapida = new rapidasSchema(data);
    return await rapida.save();
}

async function actualizarRapida(id, data) {
    return await rapidasSchema.findByIdAndUpdate(id, data, { new: true });
}

async function eliminarRapida(id) {
    return await rapidasSchema.findByIdAndDelete(id);
}

module.exports = {
    conseguirTodasRapidas,
    conseguirRapidaPorId,
    crearRapida,
    actualizarRapida,
    eliminarRapida
};