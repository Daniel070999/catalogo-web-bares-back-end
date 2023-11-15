const express = require('express');
const router = express.Router();
const menuController = require('./menuController');
const multer = require('multer');
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });
const security = require('../../security/authorize');

router.post('/menubybarid', menuController.getMenuByBarIdController);
router.post('/newmenu', upload.single('image'), menuController.insertMenuController);
router.post('/update', security.onlyAdminPermission, upload.single('image'), menuController.updateMenuController);

module.exports = router;