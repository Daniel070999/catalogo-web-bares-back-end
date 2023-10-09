const express = require('express');
const router = express.Router();
const userController = require('../../controllers/user/userController');

router.post('/getbyrolsessionpermission', userController.getUserByRolSessionPermissionController);//ok
router.post('/updateuseradminbarbyrolsessionpermission', userController.updateUserAdminBarByRolSessionPermissionController);//ok

module.exports = router;