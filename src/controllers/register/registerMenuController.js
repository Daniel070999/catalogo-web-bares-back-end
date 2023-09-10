const registerHelper = require('../../helper/register/registerMenuHelper');
const bdd = require('../../Models/sql/bddTables');
const utils = require('../../helper/utils');

function insertRegMenuController(req, res) {
    const datosRegistro = utils.createObjectData(req.body, bdd.tmenu);
    console.log(datosRegistro);

    registerHelper.insertRegisterMenu((err, result) => {
        if (err) {
            res.status(500).json({ error: 'Error al registrar ' + err });
        } else {
            res.json('Menú registrado: ' + result);
        }
    }, datosRegistro);
}
function insertRegBarController(req, res) {
    const datosRegistro = utils.createObjectData(req.body, bdd.tbar);

    registerHelper.insertRegisterBar(req.file, req, (err, result) => {
        if (err) {
            res.status(500).json({ error: 'Error al registrar ' + err });
        } else {
            res.json('Bar registrado: ' + result);
        }
    }, datosRegistro);
}
module.exports = {
    insertRegMenuController,
    insertRegBarController
};
