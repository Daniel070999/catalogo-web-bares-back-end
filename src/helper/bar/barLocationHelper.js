const connection = require('../../config/database');
const bdd = require('../../Models/sql/bddTables');
const utils = require('../../helper/utils');
// Obtener todos los usuarios
function getAllBarsLocation(callback) {
  const sql = utils.selectBDD(bdd.tubicacionbar);
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
