const crypto = require('crypto');
const key = '12345698754124879548752101254-32';
//encrypt: 1 | decrypt: 2 
function EncryptionDecryption(req, res) {

    const length = 16;
    const { action, data } = req.body;

    try {
        let result;
        if (action === '1') {
            let iv = crypto.randomBytes(length);
            let cipher = crypto.createCipheriv('aes-256-cbc', Buffer.from(key), iv);
            let encrypted = cipher.update(data);
            encrypted = Buffer.concat([encrypted, cipher.final()]);
            res.status(200).json({ message: 'Encrypted word: ' + iv.toString('hex') + ':' + encrypted.toString('hex') });
            return;
        } else if (action === '2') {
            let textParts = data.split(':')
            let iv = Buffer.from(textParts.shift(), 'hex')
            let encryptedText = Buffer.from(textParts.join(':'), 'hex')
            let decipher = crypto.createDecipheriv('aes-256-cbc', Buffer.from(key), iv)
            let decrypted = decipher.update(encryptedText)

            decrypted = Buffer.concat([decrypted, decipher.final()])

            res.status(200).json({ message: 'Decrypted word: ' + decrypted.toString() });
            return;
        } else {
            res.status(400).json({ error: 'Invalid action specified' });
        }

        res.status(200).json({ result, iv: iv.toString('hex') });
        return;

    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'An error occurred' });
    }
}

module.exports = {
    EncryptionDecryption
};
