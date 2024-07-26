const express = require("express");
const cors = require("cors")
const { dbConnection } = require("./database/config");
require('dotenv').config()

//Crear el servidor de express
const app = express()

//Conexion a base de datos
dbConnection()

//CORS
app.use(cors())

//Lectura y parseo del body
app.use(express.json());

//Rutas
app.use('/api/auth', require('./routes/auth')); //? todo lo que sea de este archivo se habilita en esa ruta

//TODO: CRUD eventos
app.use('/api/events', require('./routes/events')); //? todo lo que sea de este archivo se habilita en esa ruta

//Directorio publico
app.use(express.static('public'));

//Escuchar peticiones (listeners)
app.listen(process.env.PORT, () => {
    console.log(`Servidor corriendo en puerto ${process.env.PORT}`)
})