const express = require('express');
const router = express.Router();
const registerController = require('../../controllers/register/registerController');

router.post('/updateregisteradminrolbyrolsessionpermission', registerController.updateRegisterAdminRolByRolSessionPermissionController);//ok

module.exports = router;