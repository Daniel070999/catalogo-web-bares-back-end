const express = require('express');
const router = express.Router();
const barLocationController = require('../controllers/barLocationController');

// Ruta para obtener todos los usuarios
router.get('/barslocations', barLocationController.getAllBarsLocation);

module.exports = router;