const express = require('express');
const router = express.Router();
const registerController = require('../../controllers/login/registerController');
const loginController = require('../../controllers/login/loginController');
const logoutController = require('../../controllers/login/logoutController');

router.post('/singup', registerController.insertReg);
router.post('/singin', loginController.loginController);
router.post('/logout', logoutController.logOutController);


module.exports = router;