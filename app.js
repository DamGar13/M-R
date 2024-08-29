const bodyParser = require('body-parser');
const e = require('express');
const express = require('express');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const mongoose = require('mongoose');
const usuario ="damiang_13";
const password="P5Nt539aeDm6yAZZ";
const dataBase="myr";

const uri = `mongodb+srv://${usuario}:${password}@cluster0.tm9afqm.mongodb.net/${dataBase}?retryWrites=true&w=majority&appName=Cluster0`;

mongoose.connect(uri)
    .then(() => console.log("conectado a mongodb"))
    .catch(e => console.log("error de conexion", e));

app.use(express.static(__dirname + '/public'));

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use("/", require("./router/rutasmyr"));
app.use("/usuariosmyr", require("./router/usuariosmyr"))
app.use((req, res, next) =>{
    res.status(404).render('404', {
        titulo: "Error 404",
        descripcion: "Pagina no Encontrada"
    })
});

app.listen(port, () => {
    console.log(`Ejecucion del puerto ${port}`)
});