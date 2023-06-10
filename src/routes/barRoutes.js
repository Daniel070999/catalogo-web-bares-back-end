const express = require('express');
const router = express.Router();
const barController = require('../controllers/barController');
const barLocation = require('../controllers/barLocationController');

router.get('/bars', barController.getAllBars);
router.get('/barslocations', barLocation.getAllBarsLocation);

module.exports = router;