const express = require('express');
const router = express.Router();
const registerController = require('../controllers/findById');

router.post('/byid', registerController.findBarByIdController);
router.post('/menu', registerController.findMenuByIdController);
router.post('/bar', registerController.findDataBarByIdController);

module.exports = router;