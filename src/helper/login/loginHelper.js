const connection = require('../../config/database');
const bdd = require('../../Models/sql/bddTables');
const utils = require('../../helper/utils');

function loginHelper(req, callback) {
    const { usuario, email, clave } = callback;
    const registerData = [usuario, email, clave];
    const sql = utils.selectBDDwithParams(bdd.tregistros, '(usuario=? OR email=?) AND clave=?');
    const sqlVerifyUser = `SELECT COUNT(*)count FROM ${bdd.tregistros.table} WHERE (usuario='${callback.usuario}' OR email='${callback.email}')`;
    connection.query(sqlVerifyUser, registerData, (err, results) => {
        if (err) {
            console.log(err, null)
        } else {
            const verify = results[0].count;
            if (verify == 1) {
                connection.query(sql, registerData, (err, results) => {
                    if (err) {
                        console.log(err, null);
                    } else {
                        if (results == '') {
                            req(null, 'Las credenciales no son correctas')
                        } else {
                            req(null, results);
                        }
                    }
                });
            } else {
                req(null, `El usuario o email no existe`);

            }
        }
    });

}


module.exports = {
    loginHelper
};
