const connection = require('../../config/database');
const bdd = require('../../Models/sql/bddTables');
const utils = require('../utils');

function bar(req, callback) {
    const { id_bar } = callback;
    const registerData = [id_bar];
    const sql = `select tb.id_bar from ${bdd.tbar.table} tb
    left join ${bdd.tusuarios.table} tu on tu.id_bar=tb.id_bar
    left join ${bdd.tregistros.table} tr on tr.id_registro=tu.id_registro
    where tr.id_registro=${callback} and tu.id_bar is not null`;
    connection.query(sql, registerData, (err, results) => {
        if (err) {
            console.log(err, null);
        } else {
            req(null, results);
        }
    });
}

function menu(req, callback) {
    const { id_bar } = req.body.id_bar;
    const registerData = [id_bar];
    const sql = utils.findById(bdd.tmenu, `id_bar=${req.body.id_bar}`);
    connection.query(sql, registerData, (err, results) => {
        if (err) {
            console.log(err, null);
        } else {
            callback(null, results);
        }
    });
}

function dataBar(req, callback) {
    const { id_bar } = req.body.id_bar;
    const registerData = [id_bar];
    const sql = utils.findById(bdd.tbar, `id_bar=${req.body.id_bar}`);
    connection.query(sql, registerData, (err, results) => {
        if (err) {
            console.log(err, null);
        } else {
            callback(null, results);
        }
    });
}

module.exports = {
    bar,
    menu,
    dataBar
};
