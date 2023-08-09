const registerHelper = require('../helper/findByIdHelper');
const getId = require('../helper/security/authorize');

function findByIdController(req, res) {
    getId.obtainId(req)
        .then(id => {
            registerHelper.bar((err, result) => {
                if (err) {
                    res.status(500).json({ error: 'Error al registrar ' + err });
                } else {
                    res.json(result);
                }
            }, id);
        })
        .catch(error => {
            res.status(401).json({ message: error.message });
        });
}

module.exports = {
    findByIdController
};
