const express = require('express');
const router = express.Router();
const menuController = require('./menuController');
const multer = require('multer');
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });
const security = require('../../security/authorize');

router.post('/menubybarid', menuController.getMenuByBarIdController);//ok
router.post('/newmenu', upload.single('image'), menuController.insertMenuController);//ok
router.post('/update', security.onlyAdminPermission, upload.single('image'), menuController.updateMenuController);//ok
router.post('/menubyid', security.onlyAdminPermission, menuController.getMenuController);//ok
router.post('/delete', security.onlyAdminPermission, menuController.deleteMenuController);//ok

module.exports = router;