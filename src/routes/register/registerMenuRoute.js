const express = require('express');
const router = express.Router();
const registerController = require('../../controllers/register/registerMenuController');

router.post('/newmenu', registerController.insertRegMenuController);
router.post('/newbar', registerController.insertRegBarController);

module.exports = router;