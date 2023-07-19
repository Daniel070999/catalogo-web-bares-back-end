const connection = require('../../config/database');
const bdd = require('../../Models/sql/bddTables');

function insertRegister(req, callback) {
  const userData = [callback.User, callback.Password, callback.Email];
  const columns = ['usuario', 'clave', 'email'];
  const placeholders = columns.map(() => '?').join(',');
  const sql = `INSERT INTO ${bdd.tables.tregistros.tabla}  (${columns}) VALUES (${placeholders})`;
  connection.query(sql, userData, (err, results) => {
    if (err) {
      console.log(err, null);
    } else {
      req(null, "id del registro registro: " + results.insertId);
    }
  });
}

module.exports = {
  insertRegister
};
