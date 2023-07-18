const connection = require('../config/database');

// Obtener todos los usuarios
function getAllBarsLocation(callback) {
  const sql = 'SELECT * FROM tubicacionbar';
  connection.query(sql, (err, results) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
}

module.exports = {
  getAllBarsLocation
};
