const connection = require('../../config/database');
const bdd = require('../../Models/sql/bddTables');
const utils = require('../../helper/utils');
const jwt = require('jsonwebtoken');

function login(req, callback, res) {
  const { usuario, email, clave } = callback;
  const registerData = [usuario, email, clave];
  const sql = utils.selectBDDwithParams(bdd.tregistros, '(usuario=? OR email=?) AND clave=?');
  const sqlVerifyUser = `SELECT COUNT(*) count FROM ${bdd.tregistros.table} WHERE (usuario='${callback.usuario}' OR email='${callback.email}')`;
  
  connection.query(sqlVerifyUser, registerData, (err, results) => {
    if (err) {
      console.log(err, null);
    } else {
      const verify = results[0].count;
      if (verify == 1) {
        connection.query(sql, registerData, (err, results) => {
          if (err) {
            console.log(err, null);
          } else {
            if (results == '') {
              req('Las credenciales no son correctas');
            } else {
              const datosLogin = utils.createObjectData(results[0], bdd.tregistros);
              const token = jwt.sign(datosLogin, 'clavesecreta'/*, { expiresIn: '1h' }*/);
              res.cookie('access_token', token, { httpOnly: true });
              res.header('Authorization', `Bearer ${token}`);
              const resultAux = results.map((obj)=>({...obj,Authorization:`Bearer ${token}`,cookie:token}));
              req(null, resultAux);
            }
          }
        });
      } else {
        req(`El usuario o email no existe`);
      }
    }
  });
}

module.exports = {
  login
};
