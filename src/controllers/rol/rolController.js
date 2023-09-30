const rolHelper = require('../../helper/rol/rolHelper');
const session = require('../../helper/security/authorize');

const TableRol = require('../../Models/Tables/TableRoles');
const TableRegister = require('../../Models/Tables/TableRegister');
const TableUser = require('../../Models/Tables/TableUser');
const TableBar = require('../../Models/Tables/TableBar');

const tableRol = new TableRol();
const tableRegister = new TableRegister();
const tableUser = new TableUser();
const tableBar = new TableBar();

/**
 * The function `getRolByRolSessionController` checks if the user has the role '3' and retrieves the
 * registers associated with that role if they do.
 * @param req - The `req` parameter is the request object that contains information about the HTTP
 * request made by the client. It includes details such as the request headers, query parameters, and
 * body.
 * @param res - The `res` parameter is the response object that is used to send the response back to
 * the client. It is an instance of the Express `Response` object.
 */
function getRolByRolSessionController(req, res) {
    session.obtainRol(req).then(rol => {
        if (rol === '3' && rol) {
            const query = tableRol.getQueryObtainRegisters();
            const values = [tableRol.columns];
            rolHelper.getRolByRolSessionHelper(query, values, (err, results) => {
                if (err) {
                    res.status(500).json({ error: 'Error al obtener los roles: ' + err });
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
 * The function checks if the user has the role of a bar admin and returns the results if they do.
 * @param req - The `req` parameter is the request object that contains information about the HTTP
 * request made by the client. It includes details such as the request headers, query parameters, and
 * body data.
 * @param res - The `res` parameter is the response object that is used to send the response back to
 * the client. It is an instance of the Express response object.
 */
function getBarAdminRolByRolSessionController(req, res) {
    session.obtainRol(req).then(rol => {
        if (rol === '3' && rol) {
            data = { rol: tableRol, register: tableRegister, user: tableUser, bar: tableBar, user: tableUser };
            rolHelper.getBarAdminRolByRolSessionHelper(data, (err, results) => {
                if (err) {
                    res.status(500).json({ error: 'Error al buscar ' + err });
                } else {
                    res.status(200).json(results);
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
    getRolByRolSessionController,
    getBarAdminRolByRolSessionController
}