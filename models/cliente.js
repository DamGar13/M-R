const mongoose = require('mongoose');
const   esquema = mongoose.Schema;

const clienteSchema = new esquema({
    nombre: String,
    correo: String,
    telefono: Number,
    mensaje: String,
})

const cliente = mongoose.model('cliente', clienteSchema);
module.exports = cliente;