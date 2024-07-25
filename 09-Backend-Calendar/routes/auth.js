/*
    Rutas de usuarios /Auth
    host + api/auth
*/

const {Router} = require("express");
const {check} = require("express-validator")
const router = Router()
const { crearUsuario, revalidarToken, loginUsuario } = require("../controllers/auth");
const { validarCampos } = require("../middlewares/validar-campos");
const { validarJWT } = require("../middlewares/validar-jwt");

router.post(
    '/new', 
    [
        check('name', 'El nombre es obligatorio').not().isEmpty(), //no esté vacio
        check('email', 'El email es obligatorio').isEmail(), //no esté vacio
        check('password', 'El password debe de ser de 6 caracteres').isLength({min: 6}), //no esté vacio
        validarCampos,
    ],
    crearUsuario)

router.post('/', 
    [
        check('email', 'El email es obligatorio').isEmail(), //no esté vacio
        check('password', 'El password debe de ser de 6 caracteres').isLength({min: 6}),
        validarCampos,
    ], 
    loginUsuario)

router.get('/renew', validarJWT, revalidarToken)

module.exports = router;