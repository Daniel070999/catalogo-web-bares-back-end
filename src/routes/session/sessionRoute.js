const express = require('express');
const router = express.Router();
const sessionController = require('../../controllers/session/sessionControler');

router.post('/login', sessionController.logInController);//ok
router.post('/signup', sessionController.signUpController);//ok
router.post('/logout', sessionController.logOutController);//ok

module.exports = router;