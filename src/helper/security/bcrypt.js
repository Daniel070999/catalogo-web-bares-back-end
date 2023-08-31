const bcrypt = require('bcrypt');
const saltRounds = 12;

async function encrypt(text) {
    return new Promise((resolve, reject) => {
      bcrypt.hash(text, saltRounds, function (err, hash) {
        if (err) {
          reject(err);
        }
        resolve(hash);
      });
    });
  }

  async function compare(text, hash) {
    try {
      const result = await bcrypt.compare(text, hash);
      return result;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

module.exports = {
    encrypt,
    compare
};
