const logoutHelper = require('../../helper/login/logoutHelper');

function logOutController(req, res) {
    logoutHelper.logOut(req, res, (err, result) => {
        if (err) {
            res.status(500).json({ error: 'Error al cerrar la sesión: ' + err });
        } else {
            res.status(200).json({ message: result });
        }
    });
}

module.exports = {
    logOutController
};
