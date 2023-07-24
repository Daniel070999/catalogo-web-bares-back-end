const express = require('express');
const router = express.Router();
const registerController = require('../../controllers/login/registerController');
const loginController = require('../../controllers/login/loginController');

router.post('/singup', registerController.insertReg);
router.post('/singin', loginController.loginController);


module.exports = router;