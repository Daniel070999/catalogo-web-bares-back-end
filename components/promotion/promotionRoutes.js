const express = require('express');
const router = express.Router();
const promotionController = require('./promotionController');
const multer = require('multer');
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });
const security = require('../../security/authorize');

router.post('/promotionbybarid', promotionController.getPromotionByBarIdController);//ok
router.post('/newpromotion', upload.single('image'), promotionController.insertPromotionController);//ok
router.post('/update', security.onlyAdminPermission, upload.single('image'), promotionController.updatePromotionController);//ok
router.post('/promotionbyid', security.onlyAdminPermission, promotionController.getPromotionController);//ok
router.post('/delete', security.onlyAdminPermission, promotionController.deletePromotionController);//ok

module.exports = router;