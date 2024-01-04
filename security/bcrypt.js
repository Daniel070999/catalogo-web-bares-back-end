const bcrypt = require('bcrypt');
const saltRounds = 12;

/**
 * The function encrypts a given text using bcrypt hashing algorithm.
 * @param text - The `text` parameter is the plain text that you want to encrypt.
 * @returns The `encrypt` function is returning a promise.
 */
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

/**
 * The function compares a plain text with a hashed value using bcrypt and returns a boolean indicating
 * whether they match or not.
 * @param text - The `text` parameter is the plain text that you want to compare with the hashed value.
 * It is the input that you want to check if it matches the hashed value.
 * @param hash - The `hash` parameter is a string that represents the hashed value of a password or any
 * other sensitive information. It is typically generated using a hashing algorithm like bcrypt.
 * @returns the result of the comparison between the text and the hash.
 */
async function compare(text, hash) {
  try {
    const result = await bcrypt.compare(text, hash);
    return result;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  encrypt,
  compare
};
