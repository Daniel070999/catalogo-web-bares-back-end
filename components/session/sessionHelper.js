const connection = require('../../config/database');
const jwt = require('jsonwebtoken');
const security = require('../../security/bcrypt');
const registerController = require('../register/registerController');

const Register = require('../register/Register');

/**
 * The function `findIfExistUser` checks if a user exists in a database based on a query and values
 * provided.
 * @param query - The query parameter is a string that represents the SQL query you want to execute. It
 * should be a valid SQL SELECT statement that checks if a user exists in a database table.
 * @param values - The `values` parameter is an array that contains the values to be used in the query.
 * These values will be used as placeholders in the query string to prevent SQL injection.
 * @returns a Promise.
 */
function findIfExistUser(query, values) {
    return new Promise((resolve, reject) => {
        connection.query(query, values, (err, results) => {
            const verify = results[0].count;
            if (err) {
                reject(new Error(err));
            }
            if (verify == 1) {
                resolve(true);
            } else {
                resolve(false);
            }
        });
    });
}

/**
 * The `loginHelper` function is a JavaScript function that helps with the login process by checking if
 * a user exists, verifying their password, and generating a token for authentication.
 * @param values - An array of values to be used in the SQL query.
 * @param data - The `data` parameter is an object that contains information about the database table
 * and column names. It has the following properties:
 * @param userAndEmail - The `userAndEmail` parameter is an object that contains the user and email
 * values. It is used to check if the user or email already exists in the database.
 * @param callback - The callback parameter is a function that will be called once the loginHelper
 * function has completed its task. It is used to handle the result or error returned by the function.
 */
function loginHelper(values, data, userAndEmail, res, callback) {

    const sqlFindUser = `SELECT ?? FROM ${data.tableRegister} WHERE (${data.usuario} = ? OR ${data.email} = ?)`;
    const sqlVerifyUser = `SELECT COUNT(*) count FROM ${data.tableRegister} WHERE (${data.usuario} = ? OR ${data.email} = ?)`;

    findIfExistUser(sqlVerifyUser, userAndEmail).then(response => {
        if (response) {
            connection.query(sqlFindUser, values, async (err, results) => {
                if (err) {
                    callback(err, null);
                } else {
                    const intentsLogin = results[0].intentoslogin;
                    if (intentsLogin <= 2) {
                        const verify = await security.compare(data.pass, results[0].clave);
                        if (verify) {
                            const register = new Register();
                            register.setId_registro = results[0].id_registro;
                            register.setUsuario = results[0].usuario;
                            register.setEmail = results[0].email;
                            register.setRol = results[0].rol;
                            const datosLogin = register.object();
                            const token = jwt.sign(datosLogin, 'clavesecreta'/*, { expiresIn: '1h' }*/);
                            res.header('Authorization', `Bearer ${token}`);
                            const resultAux = results.map((obj) => ({ ...obj, Authorization: `Bearer ${token}`, cookie: token }));
                            if (intentsLogin != 0) {
                                registerController.updateLoginFailedController(results[0].id_registro, 0);
                            }
                            callback(null, resultAux);
                        } else {
                            const intentos = 2 - results[0].intentoslogin;
                            const nuevoIntento = results[0].intentoslogin + 1;
                            callback(`Clave incorrecta, tiene ${intentos} intentos`);
                            registerController.updateLoginFailedController(results[0].id_registro, nuevoIntento);
                        }
                    } else {
                        callback('Cuenta bloqueada por clave incorrecta');
                    }
                }
            });
        } else {
            callback(`El usuario o email no existe`);
        }
    }).catch(error => {
        callback(error);
    });
}

/**
 * The function `insertRegisterHelper` inserts a new record into a database table, encrypting the
 * password before storing it, and returns the ID of the inserted record.
 * @param query - The SQL query to be executed for inserting the register data into the database.
 * @param values - The `values` parameter is an object that contains the data to be inserted into the
 * database. It typically includes key-value pairs where the keys represent the column names in the
 * database table and the values represent the corresponding values to be inserted.
 * @param pass - The `pass` parameter is the password that needs to be encrypted before inserting it
 * into the database.
 * @param callback - The `callback` parameter is a function that will be called once the query is
 * executed. It takes two parameters: `err` and `results`. If an error occurs during the query
 * execution, the `err` parameter will contain the error object, otherwise it will be `null`. If the
 * query
 */
async function insertRegisterHelper(query, values, pass, callback) {
    const passEncrypt = await security.encrypt(pass);
    const registerData = Object.assign(values, { clave: passEncrypt });
    connection.query(query, registerData, (err, results) => {
        if (err) {
            callback(err, null);
        } else {
            callback(null, results.insertId);
        }
    });
}

/**
 * The function `insertUserHelper` executes a SQL query to insert a user into a database and returns
 * the ID of the inserted user.
 * @param query - The query parameter is a string that represents the SQL query you want to execute. It
 * can be an INSERT statement to insert data into a table.
 * @param values - The `values` parameter is an array that contains the values to be inserted into the
 * database table. Each value in the array corresponds to a column in the table.
 * @param callback - The callback parameter is a function that will be called once the query is
 * executed. It takes two parameters: err and results. If an error occurs during the query execution,
 * the err parameter will contain the error object. Otherwise, the results parameter will contain the
 * results of the query, specifically the insertId
 */
function insertUserHelper(query, values, callback) {
    connection.query(query, values, (err, results) => {
        if (err) {
            callback(err, null);
        } else {
            callback(null, results.insertId);
        }
    });
}

/**
 * The logOutHelper function clears the access_token cookie, sets the Authorization header to null, and
 * calls the callback function with a success message.
 * @param {Object} res - The "res" parameter is the response object that is passed to the function. It is used
 * to send the response back to the client.
 * @param {Function} callback - The `callback` parameter is a function that will be called once the session is
 * closed. It takes two arguments: an error object (if any) and a message indicating that the session
 * has been closed.
 */
const logOutHelper = (res, callback) => {
    res.clearCookie("access_token");
    res.header('Authorization', null);
    callback(null, 'Sesión cerrada');
};


module.exports = {
    loginHelper,
    insertRegisterHelper,
    insertUserHelper,
    logOutHelper
};
