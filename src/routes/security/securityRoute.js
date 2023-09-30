const express = require('express');
const router = express.Router();
const verifyLoggin = require('../../helper/security/authorize');

router.post('/verifySession', verifyLoggin.verifyLoggin);

module.exports = router;