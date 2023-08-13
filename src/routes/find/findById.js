const express = require('express');
const router = express.Router();
const registerController = require('../../controllers/find/findById');
const getAllUserController = require('../../controllers/find/findAll');
const getAllRolesController = require('../../controllers/find/findAll');
const getAllBarAdminRolController = require('../../controllers/find/findAll');


router.post('/byid', registerController.findBarByIdController);
router.post('/menu', registerController.findMenuByIdController);
router.post('/bar', registerController.findDataBarByIdController);
router.post('/alluser', getAllUserController.findAllUserController);
router.post('/allroles', getAllRolesController.findAllRolesController);
router.post('/baradminrol', getAllBarAdminRolController.findAllBarAdminRolController);

module.exports = router;