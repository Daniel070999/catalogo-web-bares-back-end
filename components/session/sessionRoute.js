const express = require('express');
const router = express.Router();
const sessionController = require('./sessionControler');

router.post('/login', sessionController.logInController);//ok
router.post('/signup', sessionController.signUpController);//ok
router.post('/logout', sessionController.logOutController);//ok
router.post('/datasession', sessionController.dataSessionController);

module.exports = router;