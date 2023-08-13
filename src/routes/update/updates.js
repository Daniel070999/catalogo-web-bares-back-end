const express = require('express');
const router = express.Router();
const updateController = require('../../controllers/update/updatesController');


router.post('/adminbar', updateController.updateAdminBarController);
router.post('/adminrol', updateController.updateAdminRolController);

module.exports = router;