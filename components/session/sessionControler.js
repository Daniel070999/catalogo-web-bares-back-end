const sessionHelper = require('./sessionHelper');
const session = require('../../security/authorize');

const TableRegister = require('../register/TableRegister');
const TableUser = require('../user/TableUser');

const Register = require('../register/Register');
const User = require('../user/User');

const tableRegister = new TableRegister();
const tableUser = new TableUser();

/**
 * The logInController function handles the login process by retrieving user data from a table,
 * validating the user's credentials, and returning a response based on the result.
 * @param req - The `req` parameter is the request object that contains information about the incoming
 * HTTP request, such as the request headers, request body, and request parameters.
 * @param res - The `res` parameter is the response object that is used to send the response back to
 * the client. It contains methods and properties that allow you to control the response, such as
 * setting the status code and sending JSON data. In the code snippet, it is used to send the response
 * with a status
 */
function logInController(req, res) {
    const data = {
        usuario: tableRegister.usuario,
        email: tableRegister.email,
        tableRegister: tableRegister.table,
        pass: req.body.clave
    };
    const usuario = req.body.usuario;
    const email = req.body.email;
    const userAndEmail = [usuario, email]
    const values = [[tableRegister.columns], usuario, email];
    sessionHelper.loginHelper(values, data, userAndEmail, res, (err, result) => {
        if (err) {
            res.status(500).json({ error: 'Error al iniciar sesion ' + err });
        } else {
            res.status(200).json({ message: result });
        }
    });
}

/**
 * The signUpController function handles the registration process by creating a new Register object,
 * setting its properties based on the request body, inserting the register data into a database table,
 * and then inserting the user data associated with the register into another table.
 * @param req - The `req` parameter is the request object that contains information about the HTTP
 * request made by the client. It includes properties such as the request headers, request body,
 * request method, and request URL.
 * @param res - The `res` parameter is the response object that is used to send the response back to
 * the client. It contains methods like `status` to set the HTTP status code, and `json` to send a JSON
 * response.
 */
function signUpController(req, res) {
    const register = new Register();
    register.setUsuario = req.body.usuario;
    register.setEmail = req.body.email;
    const values = register.object();
    const query = tableRegister.getQueryInsert();
    const pass = req.body.clave;
    sessionHelper.insertRegisterHelper(query, values, pass, (err, idRegister) => {
        if (err) {
            res.status(500).json({ error: 'Error al registrar registro: ' + err });
        } else {
            signUpAuxInsertUser(req, idRegister).then(result => {
                res.status(200).json({ messager: 'Usuario registrado: ' + result });
            }).catch(error => {
                res.status(500).json({ error: 'Error al registrar usuario: ' + error });
            });
        }
    });
}

/**
 * The function `signUpAuxInsertUser` is a JavaScript function that inserts a new user into a database
 * table using the provided user information and returns a promise that resolves with the result of the
 * insertion.
 * @param idRegister - The idRegister parameter is the unique identifier for the registration process.
 * It is used to associate the user with the registration record in the database.
 * @returns a Promise.
 */
function signUpAuxInsertUser(req, idRegister) {
    return new Promise((resolve, reject) => {
        const user = new User();
        user.setNombre = req.body.nombre;
        user.setApellido = req.body.apellido;
        user.setGenero = req.body.genero;
        user.setTelefono = req.body.telefono;
        user.setFechanacimiento = req.body.fechanacimiento;
        user.setId_registro = idRegister;
        const values = user.object();
        const query = tableUser.getQueryInsert();
        sessionHelper.insertUserHelper(query, values, (err, result) => {
            if (err) {
                reject(err);
            } else {
                resolve(result);
            }
        });
    });
}

/**
 * The logOutController function logs out a user by calling the logOutHelper function and returns a
 * response with a success message or an error message.
 * @param req - The `req` parameter is the request object that contains information about the incoming
 * HTTP request. It includes details such as the request method, headers, and body.
 * @param res - The `res` parameter is the response object that is used to send the response back to
 * the client. It contains methods and properties that allow you to control the response, such as
 * setting the status code, headers, and sending the response body.
 */
function logOutController(req, res) {
    sessionHelper.logOutHelper(res, (err, result) => {
        if (err) {
            res.status(500).json({ error: 'Error al cerrar la sesión: ' + err });
        } else {
            res.status(200).json({ message: result });
        }
    });
}

function dataSessionController(req, res) {
    session.obtainId(req).then(response => {
        const id_registro = response;
        const idToFind = tableUser.id_registro;
        const columns = tableUser.columns;
        const query = tableUser.getQueryObtainRegistersById(idToFind);
        const values = [columns, id_registro];
        sessionHelper.dataSessionHelper(query, values, (err, result) => {
            if (err) {
                res.status(500).json({ error: 'Error obtener la información: ' + err });
            } else {
                res.status(200).json({ message: result });
            }
        });
    }).catch(error => {
        res.status(401).json({ error: error.message });
    });

}

module.exports = {
    logInController,
    signUpController,
    logOutController,
    dataSessionController
};
