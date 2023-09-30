const userHelper = require('../../helper/user/userHelper');
const session = require('../../helper/security/authorize');

const TableUser = require('../../Models/Tables/TableUser');

const tableUser = new TableUser();

/**
 * The function `getUserByRolSessionController` checks the user's role and retrieves a list of users
 * with that role if the user has the necessary permissions.
 * @param req - The `req` parameter is the request object that contains information about the HTTP
 * request made by the client. It includes details such as the request method, headers, query
 * parameters, and body.
 * @param res - The `res` parameter is the response object that is used to send the response back to
 * the client. It is an instance of the Express `Response` object.
 */
function getUserByRolSessionPermissionController(req, res) {
    session.obtainRol(req).then(rol => {
        if (rol === '3' && rol) {
            const query = tableUser.getQueryObtainRegisters();
            const values = [tableUser.columns];
            userHelper.getUserByRolSessionPermissionHelper(query, values, (err, results) => {
                if (err) {
                    res.status(500).json({ error: 'Error al obtener los usuarios: ' + err });
                } else {
                    res.status(200).json({ message: results });
                }
            });
        } else {
            res.json({ error: 'No tiene permisos' });
        }
    }).catch(error => {
        res.status(401).json({ error: error.message });
    });
}

function updateUserAdminBarByRolSessionPermissionController(req, res) {
    session.obtainRol(req).then(rol => {
        if (rol === '3' && rol) {
            const campoUpdate = tableUser.id_bar;
            const idToUpdate = tableUser.id_registro;
            const query = tableUser.getQueryUpdateById(campoUpdate, idToUpdate);
            const campo = req.body.id_bar;
            const id = req.body.id_registro;
            const values = [campo, id];
            userHelper.updateUserAdminBarByRolSessionPermissionHelper(query, values, (err, results) => {
                if (err) {
                    res.status(500).json({ error: 'Error al actualizar: ' + err });
                } else {
                    res.status(200).json({ message: results });
                }
            });
        } else {
            res.json({ error: 'No tiene permisos' });
        }
    }).catch(error => {
        res.status(401).json({ error: error.message });
    });
}

module.exports = {
    getUserByRolSessionPermissionController,
    updateUserAdminBarByRolSessionPermissionController
}