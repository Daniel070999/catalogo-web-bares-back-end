const express = require('express');
const router = express.Router();
const barController = require('../../controllers/bar/barController');
const barLocation = require('../../controllers/bar/barLocationController');

router.get('/bars', barController.getBarsController);
router.get('/barslocations', barLocation.getAllBarsLocation);

module.exports = router;