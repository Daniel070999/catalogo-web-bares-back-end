const express = require('express');
const router = express.Router();
const rolController = require('../../controllers/rol/rolController');

router.post('/getbyrolsessionpermission', rolController.getRolByRolSessionController);//ok
router.post('/getbaradminrolsessionpermission', rolController.getBarAdminRolByRolSessionController);//ok

module.exports = router;