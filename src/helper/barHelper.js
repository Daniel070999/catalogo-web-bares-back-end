const connection = require('../config/database');
const bdd = require('../Models/sql/bddTables');

// Obtener todos los usuarios
function getAllBars(callback) {
  const sql = `SELECT * FROM ${bdd.tables.tbar.tabla}`;
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
