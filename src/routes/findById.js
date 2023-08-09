const express = require('express');
const router = express.Router();
const registerController = require('../controllers/findById');

router.post('/byid', registerController.findByIdController);

module.exports = router;