const express = require('express');
const router = express.Router();
const registerController = require('../../controllers/login/registerController');

router.post('/reg', registerController.insertReg);

module.exports = router;