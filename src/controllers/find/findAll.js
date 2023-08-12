const findAllHelper = require('../../helper/find/findAllHelper');
const getId = require('../../helper/security/authorize');

function findAllController(req, res) {
    getId.obtainRol(req)
        .then(rol => {
            if (rol === 3 && rol) {
                findAllHelper.user((err, result) => {
                    if (err) {
                        res.status(500).json({ error: 'Error al buscar ' + err });
                    } else {
                        res.json(result);
                    }
                }, rol);
            } else {
                res.json({ error: 'No tiene permisos' });
            }

        })
        .catch(error => {
            res.status(401).json({ message: error.message });
        });
}

module.exports = {
    findAllController
};
