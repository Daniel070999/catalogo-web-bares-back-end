const connection = require('../../config/database');
const bdd = require('../../Models/sql/bddTables');
const utils = require('../../helper/utils');

function insertRegister(req, callback) {
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
module.exports = {
    insertRegister
};
