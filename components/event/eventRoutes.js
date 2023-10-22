const express = require('express');
const router = express.Router();
const eventController = require('./eventController');
const multer = require('multer');
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.post('/eventbybarid', eventController.getEventByBarIdController);
router.post('/newevent', upload.single('image'), eventController.insertEventController);

module.exports = router;