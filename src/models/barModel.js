const connection = require('../config/database');

// Obtener todos los usuarios
function getAllBars(callback) {
  const sql = 'SELECT * FROM tbar';
  connection.query(sql, (err, results) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
}

module.exports = {
  getAllBars
};
