const express = require('express');
const router = express.Router();
const registerController = require('../../controllers/find/findById');
const getAllController = require('../../controllers/find/findAll');


router.post('/byid', registerController.findBarByIdController);
router.post('/menu', registerController.findMenuByIdController);
router.post('/bar', registerController.findDataBarByIdController);
router.post('/alluser', getAllController.findAllController);

module.exports = router;