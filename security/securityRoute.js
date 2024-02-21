const express = require('express');
const router = express.Router();
const verifyLoggin = require('./authorize');

router.post('/verifySession', verifyLoggin.verifyLoggin);//ok

module.exports = router;