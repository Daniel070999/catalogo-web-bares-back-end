const updateHelper = require('../../helper/update/updatesHelper');
const getId = require('../../helper/security/authorize');

function updateAdminBarController(req, res) {
    getId.obtainRol(req)
        .then(rol => {
            if (rol === '3' && rol) {
                updateHelper.adminbar(req, (err, result) => {
                    if (err) {
                        res.status(500).json({ error: 'Error al buscar ' + err });
                    } else {
                        res.json(result);
                    }
                });
            } else {
                res.json({ error: 'No tiene permisos' });
            }

        })
        .catch(error => {
            res.status(401).json({ message: error.message });
        });
}
function updateAdminRolController(req, res) {
    getId.obtainRol(req)
        .then(rol => {
            if (rol === '3' && rol) {
                updateHelper.adminrol(req, (err, result) => {
                    if (err) {
                        res.status(500).json({ error: 'Error al buscar ' + err });
                    } else {
                        res.json(result);
                    }
                });
            } else {
                res.json({ error: 'No tiene permisos' });
            }

        })
        .catch(error => {
            res.status(401).json({ message: error.message });
        });
}
module.exports = {
    updateAdminBarController,
    updateAdminRolController
};
