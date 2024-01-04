const connection = require('../../config/database');
const fs = require('fs');
const parameters = require('../../utils/parameters');
const tools = require('../../utils/tools');

const eventPath = parameters.filesPath.images.evento;

/**
 * The function `getEventByBarIdHelper` is a helper function that executes a database query and returns
 * the results or an error through a callback function.
 * @param query - The SQL query to be executed.
 * @param values - The `values` parameter is an array that contains the values to be used in the query.
 * These values will be used to replace the placeholders in the query string.
 * @param callback - The callback parameter is a function that will be called once the query is
 * executed. It takes two parameters: err and results. If an error occurs during the query execution,
 * the err parameter will contain the error object. Otherwise, the results parameter will contain the
 * results of the query.
 */
function getEventByBarIdHelper(query, values, callback) {
    connection.query(query, values, (err, results) => {
        if (err) {
            callback(err, null);
        } else {
            callback(null, results);
        }
    });
}

/**
 * The function `insertEventHelper` is a JavaScript function that takes in a query, data, file, and
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
function insertEventHelper(query, data, file, callback) {
    const fileName = `${Date.now()}_${file.originalname}`;
    const imagePath = eventPath.concat(fileName);
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
 * The function `updateEventHelper` updates an event by deleting the old image, saving a new image, and
 * updating the event data in the database.
 * @param query - The SQL query to update the event in the database.
 * @param data - The `data` parameter is an object that contains the updated information for an event.
 * It could include properties such as the event title, description, date, location, etc.
 * @param id - The `id` parameter is the identifier of the event that needs to be updated. It is used
 * to specify which event should be updated in the database.
 * @param oldImage - The oldImage parameter is the name of the image file that is currently associated
 * with the event.
 * @param file - The `file` parameter is an object that represents the file being uploaded. It contains
 * the following properties:
 * @param callback - The `callback` parameter is a function that is passed as an argument to
 * `updateEventHelper` function. It is used to handle the result or error of the asynchronous
 * operations performed in the function.
 */
function updateEventHelper(query, data, id, oldImage, file, callback) {
    tools.deleteFiles(eventPath.concat(oldImage));
    const fileName = `${Date.now()}_${file.originalname}`;
    const imagePath = eventPath.concat(fileName);
    const image = fileName;
    fs.writeFile(imagePath, file.buffer, (err) => {
        if (err) {
            return callback('Error al guardar la imagen en el servidor', null);
        } else {
            const finalData = [Object.assign(Object.assign(data, { image: image })), id];
            connection.query(query, finalData, (err, results) => {
                if (err) {
                    callback(err, null);
                } else {
                    callback(null, results.message);
                }
            });
        }
    });
}

module.exports = {
    insertEventHelper,
    getEventByBarIdHelper,
    updateEventHelper
}