const registerHelper = require('../../helper/register/registerHelper');
const session = require('../../helper/security/authorize');

const TableRegister = require('../../Models/Tables/TableRegister');

const tableRegister = new TableRegister

/**
 * The function `updateRegisterAdminRolByRolSessionPermissionController` updates a register's role
 * based on the user's session role and permission.
 * @param req - The `req` parameter is the request object that contains information about the HTTP
 * request made by the client. It includes data such as the request headers, request parameters,
 * request body, etc.
 * @param res - The `res` parameter is the response object that is used to send the response back to
 * the client. It is an instance of the Express `Response` object.
 */
function updateRegisterAdminRolByRolSessionPermissionController(req, res) {
    session.obtainRol(req).then(rol => {
        if (rol === '3' && rol) {
            const campoUpdate = tableRegister.rol;
            const idToUpdate = tableRegister.id_registro;
            const query = tableRegister.getQueryUpdateById(campoUpdate, idToUpdate);
            const campo = req.body.rol;
            const id = req.body.id_registro;
            const values = [campo, id];
            registerHelper.updateRegisterAdminRolByRolSessionPermissionHelper(query, values, (err, results) => {
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
        res.status(401).json({ message: error.message });
    });
}

/**
 * The function `updateLoginFailedController` updates the `intentoslogin` field in a database table
 * with the provided `id_registro` and `intentos` values.
 * @param id_registro - The `id_registro` parameter is the unique identifier of the registration record
 * that needs to be updated. It is used to identify the specific record in the database table.
 * @param intentos - The parameter `intentos` represents the number of failed login attempts for a
 * specific user.
 */
function updateLoginFailedController(id_registro, intentos) {
    const campoUpdate = tableRegister.intentoslogin;
    const idToUpdate = tableRegister.id_registro;
    const query = tableRegister.getQueryUpdateById(campoUpdate, idToUpdate);
    const values = [intentos, id_registro];
    registerHelper.updateLoginFailedHelper(query, values, (err, results) => {
        if (err) {
            console.log('Error al actualizar: ' + err);
        } else {
            console.log(results.message);
        }
    });
}

module.exports = {
    updateRegisterAdminRolByRolSessionPermissionController,
    updateLoginFailedController
}