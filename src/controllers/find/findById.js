const registerHelper = require('../../helper/find/findByIdHelper');
const getId = require('../../helper/security/authorize');

function findBarByIdController(req, res) {
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

function findMenuByIdController(req, res) {
    registerHelper.menu(req, (err, result) => {
        if (err) {
            res.status(500).json({ error: 'Error al registrar ' + err });
        } else {
            res.json(result);
        }
    });
}

function findDataBarByIdController(req, res) {
    registerHelper.dataBar(req, (err, result) => {
        if (err) {
            res.status(500).json({ error: 'Error al registrar ' + err });
        } else {
            res.json(result);
        }
    });
}

module.exports = {
    findBarByIdController,
    findMenuByIdController,
    findDataBarByIdController
};
