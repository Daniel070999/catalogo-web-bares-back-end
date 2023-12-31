const connection = require('../../config/database');
const fs = require('fs');

const parameters = require('../../utils/parameters');
const tools = require('../../utils/tools');
const menuPath = parameters.filesPath.images.menu;

/**
 * The function `getMenuByBarIdHelper` is a helper function that executes a database query and returns
 * the results or an error through a callback function.
 * @param query - The SQL query to be executed.
 * @param values - The `values` parameter is an array that contains the values to be used in the query.
 * These values will be used to replace the placeholders in the query string.
 * @param callback - The callback parameter is a function that will be called once the query is
 * executed. It takes two parameters: err and results. If an error occurs during the query execution,
 * the err parameter will contain the error object. Otherwise, the results parameter will contain the
 * results of the query.
 */
function getMenuByBarIdHelper(query, values, callback) {
    connection.query(query, values, (err, results) => {
        if (err) {
            callback(err, null);
        } else {
            callback(null, results);
        }
    });
}

/**
 * The function `insertMenuHelper` is a JavaScript function that takes in a query, data, file, and
 * callback as parameters, and inserts a menu item into a database table with an image.
 * @param query - The SQL query to insert the menu data into the database.
 * @param data - The `data` parameter is an object that contains the data to be inserted into the
 * database. It could include properties such as `name`, `price`, `description`, etc., depending on the
 * specific requirements of the menu item being inserted.
 * @param file - The `file` parameter is an object that represents the file being uploaded. It
 * typically contains information such as the original name of the file (`file.originalname`) and the
 * file's content (`file.buffer`).
 * @param callback - The callback parameter is a function that will be called once the operation is
 * complete. It takes two parameters: an error object (if there is an error) and the result of the
 * operation (if successful).
 */
function insertMenuHelper(query, data, file, callback) {
    const fileName = `${Date.now()}_${file.originalname}`;
    const imagePath = `uploads/images/menu/${fileName}`;
    const image = fileName;
    fs.writeFile(imagePath, file.buffer, (err) => {
        if (err) {
            return callback('Error al guardar la imagen en el servidor', null);
        } else {
            const finalData = Object.assign(data, { image: image });
            connection.query(query, finalData, (err, results) => {
                if (err) {
                    callback(err, null);
                } else {
                    callback(null, results.insertId);
                }
            });
        }
    });
}

/**
 * The function `updateMenuHelper` is an asynchronous function that updates a menu item in a database,
 * including updating the image if a new image file is provided.
 * @param query - The SQL query to update the menu item in the database.
 * @param data - The `data` parameter is an object that contains the updated menu information. It could
 * include properties such as the menu name, description, price, etc.
 * @param id - The `id` parameter is the identifier of the menu item that needs to be updated. It is
 * used to specify which menu item should be updated in the database.
 * @param oldImage - The old image file name that needs to be deleted.
 * @param file - The `file` parameter is a file object that represents the new image file that is being
 * uploaded.
 * @param callback - The `callback` parameter is a function that will be called once the update
 * operation is completed. It takes two parameters: `err` and `results`. If an error occurs during the
 * update operation, `err` will contain the error object, otherwise it will be `null`. If the update
 * operation
 */
async function updateMenuHelper(query, data, id, oldImage, file, callback) {
    let image;
    let finalData;
    if (file) {
        tools.deleteFiles(menuPath.concat(oldImage));
        image = await tools.saveNewImage(file, menuPath);
        finalData = [Object.assign(Object.assign(data, { image: image })), id];
    } else {
        finalData = [data, id];
    }
    connection.query(query, finalData, (err, results) => {
        if (err) {
            callback(err, null);
        } else {
            callback(null, results.message);
        }
    });
}

/**
 * The deleteMenuHelper function executes a SQL query to delete a menu item from a database table and
 * returns the number of affected rows.
 * @param query - The SQL query to be executed for deleting the menu item(s).
 * @param id - The `id` parameter is the identifier of the menu item that you want to delete from the
 * database. It is used to specify which row(s) should be deleted based on their unique identifier.
 * @param callback - The `callback` parameter is a function that will be called once the query is
 * executed. It takes two parameters: `err` and `result`. If an error occurs during the query
 * execution, the `err` parameter will contain the error object, otherwise it will be `null`. If the
 * query
 */
function deleteMenuHelper(query, id, callback) {
    connection.query(query, id, (err, result) => {
        if (err) {
            callback(err, null);
        } else {
            callback(null, result.affectedRows);
        }
    });
}

module.exports = {
    insertMenuHelper,
    getMenuByBarIdHelper,
    updateMenuHelper,
    deleteMenuHelper
}