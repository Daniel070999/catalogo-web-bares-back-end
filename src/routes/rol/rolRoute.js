const express = require('express');
const router = express.Router();
const rolController = require('../../controllers/rol/rolController');

router.get('/getbyrolsessionpermission', rolController.getRolByRolSessionController);//ok
router.get('/getbaradminrolsessionpermission', rolController.getBarAdminRolByRolSessionController);//ok

module.exports = router;