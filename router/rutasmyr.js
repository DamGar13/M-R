const express = require('express');
const router = express.Router();

const cliente = require('../models/cliente')

router.get('/', (req, res) => {
    res.render('index');
});

router.get('/mantenimiento', (req, res) => {
    res.render('mantenimiento');
});

router.get('/reparacion', (req, res) => {
    res.render('reparacion');
});

router.get('/asesoria', (req, res) => {
    res.render('asesoria');
});

router.get('/contacto', (req, res) => {
    res.render('contacto');
});

router.get('/api', (req, res) => {
    res.render('api');
});

router.post('/contacto', async (req, res) =>{
    const body = req.body;
    try{
        await cliente.create(body);
        res.json({
            estado: true,
            mensaje: 'Cliente creado'
        })
    } catch(error){
        console.log(error);
        res.json({
            estado: false,
            mensaje: 'Error al crear cliente'
        })
    }
})

module.exports = router;