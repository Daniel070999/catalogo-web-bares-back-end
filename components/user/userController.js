const userHelper = require('./userHelper');
const session = require('../../security/authorize');

const TableUser = require('./TableUser');

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
            userHelper.executeScript(query, values, (err, results) => {
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

/**
 * The function `updateUserAdminBarByRolSessionPermissionController` updates the `id_bar` field of a
 * user's record in the database based on the user's role and session permissions.
 * @param req - The req parameter is the request object that contains information about the HTTP
 * request made by the client. It includes data such as the request headers, request parameters,
 * request body, etc.
 * @param res - The `res` parameter is the response object that is used to send the response back to
 * the client. It is an instance of the Express `Response` object.
 */
function updateUserAdminBarByRolSessionPermissionController(req, res) {
    session.obtainRol(req).then(rol => {
        if (rol === '3' && rol) {
            const idToUpdate = tableUser.id_registro;
            const query = tableUser.getQueryUpdateById(idToUpdate);
            const id = req.body.id_registro;
            const update = req.body.id_bar;
            const setUpdate = { id_bar: update };
            const values = [setUpdate, id];
            userHelper.executeScript(query, values, (err, results) => {
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