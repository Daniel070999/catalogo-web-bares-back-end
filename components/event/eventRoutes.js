const express = require('express');
const router = express.Router();
const eventController = require('./eventController');
const multer = require('multer');
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });
const security = require('../../security/authorize');
/*verificar si hay como enviar un parametro en onlyPermission para el uso de parameters*/
const parameters = require('../../utils/parameters');
const onlyAdmin = parameters.rol.admin;

router.post('/eventbybarid', eventController.getEventByBarIdController);
router.post('/newevent', upload.single('image'), eventController.insertEventController);
router.post('/update', security.onlyAdminPermission, upload.single('image'), eventController.updateEventController);//ok

module.exports = router;