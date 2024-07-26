/*
    Rutas de eventos /Events
    host + api/events
*/

const {Router} = require("express");
const router = Router()
const { validarJWT } = require("../middlewares/validar-jwt");
const { getEventos, crearEvento, actualizarEvento, eliminarEvento } = require("../controllers/events");
const { check } = require("express-validator");
const { validarCampos } = require("../middlewares/validar-campos");
const { isDate } = require("../helpers/isDate");

//Deben de estar validadas por el JWT
router.use(validarJWT)

//Obtener eventos
router.get(
    '/', 
    getEventos)

//crear eventos
router.post(
    '/',
    [
        check('title', 'El titulo es obligatorio').not().isEmpty(),
        check('start', 'Fecha de inicio es obligatoria').custom(isDate),
        check('end', 'Fecha de finalización es obligatoria').custom(isDate),
        validarCampos
    ],
     crearEvento)

//actualizar eventos
router.put('/:id', actualizarEvento)

//borrar eventos
router.delete('/:id', eliminarEvento)

module.exports = router;