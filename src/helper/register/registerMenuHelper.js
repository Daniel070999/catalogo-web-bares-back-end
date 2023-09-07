const connection = require('../../config/database');
const bdd = require('../../Models/sql/bddTables');
const utils = require('../../helper/utils');

function insertRegisterMenu(req, callback) {
    const { nombre, descripcion, precio, id_bar } = callback;
    const registerData = [nombre, descripcion, precio, id_bar];
    const sql = utils.insertBDD(bdd.tmenu);
    connection.query(sql, registerData, (err, results) => {
        if (err) {
            console.log(err, null);
        } else {
            req(null, results.insertId);
        }
    });
}

function insertRegisterBar(req, callback) {
    const { nombre, lema, descripcion, logo } = callback;
    const registerData = [nombre, lema, descripcion, logo];
    const sql = utils.insertBDD(bdd.tbar);
    connection.query(sql, registerData, (err, results) => {
        if (err) {
            console.log(err, null);
        } else {
            req(null, results.insertId);
        }
    });
}
module.exports = {
    insertRegisterMenu,
    insertRegisterBar
};
