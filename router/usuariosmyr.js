const express = require('express');
const router = express.Router();

const usuario = require('../models/usuario');
const cliente = require('../models/cliente');

router.post('/', async(req, res) =>{
    const arrayUsers = await usuario.find()
    const userform = req.body.usuario;
    const passform = req.body.contrasena;
    let estadoAcceso = false;
    
    arrayUsers.forEach(registro => {
        if(registro.user === userform && registro.pass === passform){
            estadoAcceso = true
        }
    });

    if(estadoAcceso === true){
        res.render('usuarios');
    } else{
        res.send('acceso invalido')
    }
})

router.get('/', (req, res) => {
    res.render('usuarios')
})

router.get('/usersMant', (req, res) => {
    res.render('usuarios/usersMant')
})

router.get('/usersRep', (req, res) => {
    res.render('usuarios/usersRep')
})

router.get('/usersAdv', (req, res) => {
    res.render('usuarios/usersAdv')
})

/*router.get('/usersCont', (req, res) => {
    res.render('usuarios/usersCont')
})*/

router.get('/usersCont', async (req, res) => {
    try{
        const arrayClientes = await cliente.find();
        res.render('usuarios/usersCont', {arrayClientes});
    } catch (error) {
        alert(error)
    }
})

module.exports = router;