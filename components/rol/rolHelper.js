const connection = require("../../config/database")

/**
 * The function `getRolByRolSessionHelper` executes a database query and returns the results or an
 * error through a callback function.
 * @param query - The query parameter is a string that represents the SQL query you want to execute. It
 * should be a valid SQL statement that can be executed by the database.
 * @param values - The `values` parameter is an array that contains the values to be used in the query.
 * These values will be used to replace the placeholders in the query string.
 * @param callback - The callback parameter is a function that will be called once the query is
 * executed. It takes two parameters: err and results. If an error occurs during the query execution,
 * the err parameter will contain the error object, otherwise it will be null. The results parameter
 * will contain the results of the query execution
 */
function getRolByRolSessionHelper(query, values, callback) {
    connection.query(query, values, (err, results) => {
        if (err) {
            callback(err, null);
        } else {
            callback(null, results);
        }
    });
}

/**
 * The function `getBarAdminRolByRolSessionHelper` retrieves information about bar administrators based
 * on their role session.
 * @param data - The `data` parameter is an object that contains various properties used in the SQL
 * query. Here are the properties and their meanings:
 * @param callback - The callback parameter is a function that will be called once the query is
 * executed. It takes two parameters: err and results. If there is an error during the query execution,
 * the err parameter will contain the error information. Otherwise, the results parameter will contain
 * the query results.
 */
function getBarAdminRolByRolSessionHelper(data, callback) {
    const sql = `select tr.${data.register.id_registro},tr.${data.rol.rol},tb.${data.bar.id_bar},tb.${data.bar.nombre},
                tro.${data.rol.descripcion},tr.${data.register.usuario},tr.${data.register.email} 
                from ${data.register.table} tr
                left join ${data.user.table} tu on tu.${data.user.id_registro}=tr.${data.register.id_registro}
                left join ${data.bar.table} tb on tu.${data.user.id_bar}=tb.${data.bar.id_bar}
                left join ${data.rol.table} tro on tro.${data.rol.rol}=tr.${data.register.rol}`;
    connection.query(sql, (err, results) => {
        if (err) {
            callback(err, null);
        } else {
            callback(null, results);
        }
    });
}

module.exports = {
    getRolByRolSessionHelper,
    getBarAdminRolByRolSessionHelper
}