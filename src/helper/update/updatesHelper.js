const connection = require('../../config/database');
const bdd = require('../../Models/sql/bddTables');
const utils = require('../utils');

function adminbar(req, callback) {
    const id_bar = req.body.id_bar;
    const id_registro = req.body.id_registro;
    const sql = utils.updateById(bdd.tusuarios, `id_bar=${id_bar}`, `id_registro=${id_registro}`);
    connection.query(sql, (err, results) => {
        if (err) {
            console.log(err, null);
        } else {
            callback(null, results.message);
        }
    });
}
function adminrol(req, callback) {
    const rol = req.body.rol;
    const id_registro = req.body.id_registro;
    const sql = utils.updateById(bdd.tregistros, `rol=${rol}`, `id_registro=${id_registro}`);
    connection.query(sql, (err, results) => {
        if (err) {
            console.log(err, null);
        } else {
            callback(null, results.message);
        }
    });
}

function loginFailed(id_registro, intento) {
    const sql = utils.updateById(bdd.tregistros, `intentoslogin=${intento}`, `id_registro=${id_registro}`);
    connection.query(sql, (err, results) => {
        if (err) {
            console.log(err, null);
        } else {
            console.log(results.message);
        }
    });
}

module.exports = {
    adminbar,
    adminrol,
    loginFailed
};
