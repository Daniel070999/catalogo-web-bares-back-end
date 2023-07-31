const express = require('express');
const router = express.Router();
const registerController = require('../../controllers/login/registerController');
const loginController = require('../../controllers/login/loginController');
const logoutController = require('../../controllers/login/logoutController');
const verifyLoggin = require('./authorize');

router.get('/verifySession', verifyLoggin.verifyLoggin);

/*
router.post('/login', logIn);                                 // ruta publica
router.get('/', authorize('2'), verifyLoggin, getAll); // acceso solo administrador y logeado
router.get('/:id', authorize(), verifyLoggin, getById);       // cualquier usuario autorizado y logeado
router.post('/logout', authorize(), logOut);                  // cualquier usuario autorizado


*/

module.exports = router;