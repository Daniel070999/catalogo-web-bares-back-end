const express = require('express');
const router = express.Router();
const verifyLoggin = require('./authorize');
const bcrypt = require('./bcrypt');

router.post('/verifySession', verifyLoggin.verifyLoggin);

router.post('/bcrypt', bcrypt.EncryptionDecryption);


module.exports = router;