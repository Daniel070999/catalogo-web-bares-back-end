const express = require('express');
const router = express.Router();
const registerController = require('./registerController');

router.post('/updateregisteradminrolbyrolsessionpermission', registerController.updateRegisterAdminRolByRolSessionPermissionController);//ok

module.exports = router;