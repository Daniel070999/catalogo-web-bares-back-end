const express = require('express');
const router = express.Router();
const verifyLoggin = require('./authorize');

router.post('/verifySession', verifyLoggin.verifyLoggin);

/*
router.post('/login', logIn);                                 // ruta publica
router.get('/', authorize('2'), verifyLoggin, getAll); // acceso solo administrador y logeado
router.get('/:id', authorize(), verifyLoggin, getById);       // cualquier usuario autorizado y logeado
router.post('/logout', authorize(), logOut);                  // cualquier usuario autorizado


*/

module.exports = router;