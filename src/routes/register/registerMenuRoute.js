const express = require('express');
const router = express.Router();
const registerController = require('../../controllers/register/registerMenuController');
const multer = require('multer');
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.post('/newmenu', registerController.insertRegMenuController);
router.post('/newbar', upload.single('logo'), registerController.insertRegBarController);

module.exports = router;