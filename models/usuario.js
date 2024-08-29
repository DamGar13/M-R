const mongoose = require('mongoose');
const esquema = mongoose.Schema;

const usuarioSchema = new esquema({
    user: String,
    pass: String
})

const modelo = mongoose.model('usuario', usuarioSchema);
module.exports = modelo;