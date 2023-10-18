const express = require('express');
const router = express.Router();
const barController = require('./barController');
const multer = require('multer');
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.get('/bars', barController.getBarsController);//ok
router.get('/barslocations', barController.getBarsLocationController);//ok
router.post('/allbarbyid', barController.getAllBarByIdController);//ok

router.post('/barbysessionid', barController.getBarBySessionIdController);//ok
router.post('/newbar', upload.single('logo'), barController.insertBarController);//ok

module.exports = router;