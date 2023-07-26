const express = require('express');
const router = express.Router();
const registerController = require('../../controllers/login/registerController');
const loginController = require('../../controllers/login/loginController');
const logoutController = require('../../controllers/login/logoutController');

router.post('/singup', registerController.insertReg);
router.post('/singin', loginController.loginController);
router.post('/logout', logoutController.logOutController);

/*
router.post('/login', logIn);                                 // ruta publica
router.get('/', authorize('2'), verifyLoggin, getAll); // acceso solo administrador y logeado
router.get('/:id', authorize(), verifyLoggin, getById);       // cualquier usuario autorizado y logeado
router.post('/logout', authorize(), logOut);                  // cualquier usuario autorizado



function logOut(req, res) {
    return res
        .clearCookie("access_token")
        .status(200)
        .json({ message: "Sesion cerrada" });
};

function verifyLoggin(req, res, next) {
    const authorization = req.headers.authorization.split(' ')[1]
    const cookie = req.cookies.access_token;
    if (cookie != null && authorization == cookie) {
        next();
    } else {
        res.status(200).json({ message: "No esta en sesion" });
    }
}
*/

module.exports = router;