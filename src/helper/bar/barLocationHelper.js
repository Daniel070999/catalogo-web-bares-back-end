const connection = require('../../config/database');
const bdd = require('../../Models/sql/bddTables');
// Obtener todos los usuarios
function getAllBarsLocation(callback) {
  const sql = `SELECT * FROM ${bdd.tubicacionbar.table}`;
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
