const express = require('express');
const router = express.Router();
const menuController = require('../../controllers/menu/menuController');
const multer = require('multer');
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.post('/menubybarid', menuController.getMenuByBarIdController);
router.post('/newmenu', upload.single('image'), menuController.insertMenuController);

module.exports = router;