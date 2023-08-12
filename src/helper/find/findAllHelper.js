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


module.exports = {
    user
};
