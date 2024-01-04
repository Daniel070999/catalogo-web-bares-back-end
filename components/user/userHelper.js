const connection = require('../../config/database');

/**
 * The function executes a SQL query with provided values and returns the results through a callback
 * function.
 * @param query - The query parameter is a string that represents the SQL query you want to execute. It
 * can be any valid SQL statement, such as SELECT, INSERT, UPDATE, DELETE, etc.
 * @param values - The "values" parameter is an array that contains the values to be used in the query.
 * These values are used to replace the placeholders in the query string.
 * @param callback - The `callback` parameter is a function that will be called once the query
 * execution is complete. It takes two parameters: `err` and `results`. If an error occurs during the
 * query execution, the `err` parameter will contain the error object, otherwise it will be `null`. If
 * the
 */
function executeScript(query, values, callback) {
    connection.query(query, values, (err, results) => {
        if (err) {
            callback(err, null);
        } else {
            callback(null, results);
        }
    });
}

module.exports = {
    executeScript
}