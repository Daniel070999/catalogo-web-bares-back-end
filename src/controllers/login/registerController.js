const registerHelper = require('../../helper/login/registerHelper');

function insertReg(req, res) {
    const { user, password, email } = req.body;

    registerHelper.insertRegister((err, result) => {
        if (err) {
            res.status(500).json({ error: 'Error al registrar ' + err });
        } else {
            res.json(result);
        }
    }, { User: user, Password: password, Email: email });
}

module.exports = {
    insertReg
};
