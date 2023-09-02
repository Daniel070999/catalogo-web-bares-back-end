const loginHelper = require('../../helper/login/loginHelper');
const bdd = require('../../Models/sql/bddTables');
const utils = require('../../helper/utils');

function loginController(req, res) {
    const datosLogin = utils.createObjectData(req.body, bdd.tregistros);
    loginHelper.login((err, result) => {
        if (err) {
            res.status(500).json({ error: 'Error al iniciar sesion ' + err });
        } else {
            res.json({ message: result });
        }
    }, datosLogin, res);
}

module.exports = {
    loginController
};
