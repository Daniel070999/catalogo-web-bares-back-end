const loginHelper = require('../../helper/login/loginHelper');
const bdd = require('../../Models/sql/bddTables');
const utils = require('../../helper/utils');

function loginController(req, res) {
    const datosLogin = utils.createObjectData(req.body, bdd.tregistros);
    console.log(datosLogin);

    loginHelper.loginHelper((err, result) => {
        if (err) {
            res.status(500).json({ error: 'Error al registrar registro ' + err });
        } else {
            res.status(200).json({ message: result});
            console.log(result[0].rol);
        }
    }, datosLogin);
}

module.exports = {
    loginController
};
