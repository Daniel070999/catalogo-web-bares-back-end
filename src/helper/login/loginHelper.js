const connection = require('../../config/database');
const bdd = require('../../Models/sql/bddTables');
const utils = require('../../helper/utils');

function loginHelper(req, callback) {
    const { usuario, email, clave } = callback;
    const registerData = [usuario, email, clave];
    const sql = 'select usuario,clave,email,rol from catalogowebbdd.tregistros where (usuario=? or email=?) and clave=?';
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
}


module.exports = {
    loginHelper
};
