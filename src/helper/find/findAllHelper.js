const connection = require('../../config/database');
const bdd = require('../../Models/sql/bddTables');
const utils = require('../utils');

function user(req, callback) {
    const sql = utils.selectBDD(bdd.tregistros);
    connection.query(sql, (err, results) => {
        if (err) {
            console.log(err, null);
        } else {
            req(null, results);
        }
    });
}

function roles(req, callback) {
    const sql = utils.selectBDD(bdd.troles);
    connection.query(sql, (err, results) => {
        if (err) {
            console.log(err, null);
        } else {
            req(null, results);
        }
    });
}

function baradminrol(req, callback) {
    const sql = `select tr.id_registro,tr.rol,tb.id_bar,tb.nombre,tro.descripcion,tr.usuario,tr.email from ${bdd.tregistros.table} tr
    left join ${bdd.tusuarios.table} tu on tu.id_registro=tr.id_registro
    left join ${bdd.tbar.table} tb on tu.id_bar=tb.id_bar
    left join ${bdd.troles.table} tro on tro.rol=tr.rol`;
    connection.query(sql, (err, results) => {
        if (err) {
            console.log(err, null);
        } else {
            req(null, results);
        }
    });
}
module.exports = {
    user,
    roles,
    baradminrol
};
