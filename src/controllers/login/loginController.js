const loginHelper = require('../../helper/login/loginHelper');
const bdd = require('../../Models/sql/bddTables');
const utils = require('../../helper/utils');

function loginController(req, res) {
    const datosLogin = utils.createObjectData(req.body, bdd.tregistros);

    loginHelper.login((err, result) => {
        if (err) {
            res.status(500).json({ error: 'Error al iniciar sesion ' + err });
        } else {
            res.status(200).json({ message: result });
            console.log(result[0].rol);
        }
    }, datosLogin,res); 
}

module.exports = {
    loginController
};
