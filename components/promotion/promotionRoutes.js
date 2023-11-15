const express = require('express');
const router = express.Router();
const promotionController = require('./promotionController');
const multer = require('multer');
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.post('/promotionbybarid', promotionController.getPromotionByBarIdController);
router.post('/newpromotion', upload.single('image'), promotionController.insertPromotionController);
router.post('/update', promotionController.updatePromotionController);

module.exports = router;