const registerHelper = require('../../helper/register/registerMenuHelper');
const bdd = require('../../Models/sql/bddTables');
const utils = require('../../helper/utils');

function insertRegMenuController(req, res) {
    const datosRegistro = utils.createObjectData(req.body, bdd.tmenu);
    console.log(datosRegistro);

    registerHelper.insertRegister((err, result) => {
        if (err) {
            res.status(500).json({ error: 'Error al registrar ' + err });
        } else {
            res.json('Menú registrado: ' + result);
        }
    }, datosRegistro);
}

module.exports = {
    insertRegMenuController
};
