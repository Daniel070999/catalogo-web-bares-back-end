const connection = require('../../config/database');
const bdd = require('../../Models/sql/bddTables');
const utils = require('../../helper/utils');
const encrypt = require('../security/bcrypt')

async function insertRegister(req, callback) {
  const { usuario, email, clave } = callback;
  try {
    const claveEncrypt = await encrypt.encrypt(clave);
    const registerData = [id_registro = null, usuario, email, claveEncrypt, rol = '1'];
    const sql = utils.insertBDD(bdd.tregistros);

    connection.query(sql, registerData, (err, results) => {
      if (err) {
        console.log(err, null);
      } else {
        req(null, results.insertId);
      }
    });
  } catch (error) {
    console.error(error);
  }
}

function insertUser(req, callback, id_registro) {
  const { nombre, genero, telefono, fechanacimiento } = callback;
  const userData = [nombre, genero, telefono, fechanacimiento, id_registro];
  const sql = utils.insertBDD(bdd.tusuarios);
  connection.query(sql, userData, (err, results) => {
    if (err) {
      console.log(err, null);
    } else {
      req(null, results.insertId);
    }
  });
}

module.exports = {
  insertRegister,
  insertUser
};
