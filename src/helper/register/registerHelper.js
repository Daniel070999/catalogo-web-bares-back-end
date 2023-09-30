const connection = require("../../config/database")

/**
 * The function `updateRegisterAdminRolByRolSessionPermissionHelper` updates the register admin role
 * based on the role session permission.
 * @param query - The query parameter is a string that represents the SQL query you want to execute. It
 * should be a valid SQL statement that can be executed by the database.
 * @param values - The `values` parameter is an array that contains the values to be inserted or
 * updated in the database. These values will be used to replace the placeholders in the query string.
 * @param callback - The callback parameter is a function that is passed as an argument to the
 * updateRegisterAdminRolByRolSessionPermissionHelper function. It is used to handle the result of the
 * query execution.
 */
function updateRegisterAdminRolByRolSessionPermissionHelper(query, values, callback) {
    connection.query(query, values, (err, results) => {
        if (err) {
            callback(err, null);
        } else {
            callback(null, results);
        }
    });
}

/**
 * The function `updateLoginFailedHelper` executes a database query with provided values and returns
 * the results or an error through a callback function.
 * @param query - The query parameter is a string that represents the SQL query you want to execute. It
 * can be any valid SQL statement, such as SELECT, INSERT, UPDATE, DELETE, etc. The query can also
 * include placeholders for values that will be dynamically inserted later.
 * @param values - The `values` parameter is an array that contains the values to be inserted into the
 * query. These values will be used to replace the placeholders in the query string.
 * @param callback - The callback parameter is a function that will be called once the query is
 * executed. It takes two parameters: err and results. If there is an error during the query execution,
 * the err parameter will contain the error object. Otherwise, the results parameter will contain the
 * results of the query.
 */
function updateLoginFailedHelper(query, values, callback) {
    connection.query(query, values, (err, results) => {
        if (err) {
            callback(err, null);
        } else {
            callback(null, results);
        }
    });
}


module.exports = {
    updateRegisterAdminRolByRolSessionPermissionHelper,
    updateLoginFailedHelper
}