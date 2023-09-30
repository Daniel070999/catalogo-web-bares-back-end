const connection = require('../../config/database');

function getUserByRolSessionPermissionHelper(query, values, callback) {
    connection.query(query, values, (err, results) => {
        if (err) {
            callback(err, null);
        } else {
            callback(null, results);
        }
    });
}

function updateUserAdminBarByRolSessionPermissionHelper(query, values, callback) {
    connection.query(query, values, (err, results) => {
        if (err) {
            callback(err, null);
        } else {
            callback(null, results);
        }
    });
}

module.exports = {
    getUserByRolSessionPermissionHelper,
    updateUserAdminBarByRolSessionPermissionHelper
}