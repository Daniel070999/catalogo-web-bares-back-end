const connection = require('../../config/database');
const bdd = require('../../Models/sql/bddTables');
const utils = require('../../helper/utils');
const jwt = require('jsonwebtoken');
const compare = require('../security/bcrypt');
const update = require('../../controllers/update/updatesController');

function login(req, callback, res) {
  const { usuario, email } = callback;
  const clave = callback.clave;
  const data = [usuario, email];
  const sql = utils.findById(bdd.tregistros, '(usuario=? OR email=?)');
  const sqlVerifyUser = `SELECT COUNT(*) count FROM ${bdd.tregistros.table} WHERE (usuario=? OR email=?)`;
  connection.query(sqlVerifyUser, data, (err, results) => {
    if (err) {
      console.log(err, null);
    } else {
      const verify = results[0].count;
      if (verify == 1) {
        connection.query(sql, data, async (err, results) => {
          if (err) {
            console.log(err, null);
          } else {
            const intentsLogin = results[0].intentoslogin;
            if (intentsLogin <= 2) {
              const verify = await compare.compare(clave, results[0].clave);
              if (verify) {
                const datosLogin = utils.createObjectData(results[0], bdd.tregistros);
                const token = jwt.sign(datosLogin, 'clavesecreta'/*, { expiresIn: '1h' }*/);
                res.header('Authorization', `Bearer ${token}`);
                const resultAux = results.map((obj) => ({ ...obj, Authorization: `Bearer ${token}`, cookie: token }));
                update.updateLoginFailed(results[0].id_registro, 0)
                req(null, resultAux);
              } else {
                const intentos = 2 - results[0].intentoslogin;
                const nuevoIntento = results[0].intentoslogin + 1;
                req(`Clave incorrecta, tiene ${intentos} intentos`);
                update.updateLoginFailed(results[0].id_registro, nuevoIntento);
              }
            } else {

              req('Su cuenta esta bloqueada por ingresar varias veces una clave incorrecta');
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
