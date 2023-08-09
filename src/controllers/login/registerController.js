const registerHelper = require('../../helper/login/registerHelper');
const bdd = require('../../Models/sql/bddTables');
const utils = require('../../helper/utils');

function insertReg(req, res) {
    const datosRegistro = utils.createObjectData(req.body, bdd.tregistros);
    const datosUsuario = utils.createObjectData(req.body, bdd.tusuarios);
    registerHelper.insertRegister((err, result) => {
        if (err) {
            res.status(500).json({ error: 'Error al registrar registro ' + err });
        } else {
            registerHelper.insertUser((err, result) => {
                if (err) {
                    res.status(500).json({ error: 'Error al registrar usuario' + err });
                } else {
                    console.log(result);
                    res.json('Usuario registrado: ' + result);
                }
            }, datosUsuario, result);
        }
    }, datosRegistro);
}

module.exports = {
    insertReg
};
