const connection = require('../../config/database');
const fs = require('fs');
const parameters = require('../../utils/parameters');
const tools = require('../../utils/tools');
const promotionPath = parameters.filesPath.images.promocion;

/**
 * The function `getPromotionByBarIdHelper` is a helper function that executes a database query and returns
 * the results or an error through a callback function.
 * @param query - The SQL query to be executed.
 * @param values - The `values` parameter is an array that contains the values to be used in the query.
 * These values will be used to replace the placeholders in the query string.
 * @param callback - The callback parameter is a function that will be called once the query is
 * executed. It takes two parameters: err and results. If an error occurs during the query execution,
 * the err parameter will contain the error object. Otherwise, the results parameter will contain the
 * results of the query.
 */
function getPromotionByBarIdHelper(query, values, callback) {
    connection.query(query, values, (err, results) => {
        if (err) {
            callback(err, null);
        } else {
            callback(null, results);
        }
    });
}

/**
 * The function `insertPromotionHelper` is a JavaScript function that takes in a query, data, file, and
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
function insertPromotionHelper(query, data, file, callback) {
    const fileName = `${Date.now()}_${file.originalname}`;
    const imagePath = `uploads/images/promocion/${fileName}`;
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
 * The function `updatePromotionHelper` is an asynchronous function that updates a promotion in a
 * database, including updating the promotion image if a new image file is provided.
 * @param query - The SQL query to update the promotion in the database.
 * @param data - The `data` parameter is an object that contains the updated promotion information. It
 * could include properties such as `title`, `description`, `startDate`, `endDate`, etc.
 * @param id - The `id` parameter is the identifier of the promotion that needs to be updated. It is
 * used to specify which promotion record in the database should be updated.
 * @param oldImage - The `oldImage` parameter is the filename of the existing image associated with the
 * promotion.
 * @param file - The `file` parameter is an optional parameter that represents the new image file that
 * is being uploaded for the promotion. If a new image file is provided, it will be used to update the
 * promotion's image. If no new image file is provided, the existing image will not be updated.
 * @param callback - The `callback` parameter is a function that will be called once the update
 * operation is completed. It takes two parameters: `err` and `results`. If an error occurs during the
 * update operation, `err` will contain the error object, otherwise it will be `null`. If the update
 * operation
 */
async function updatePromotionHelper(query, data, id, oldImage, file, callback) {
    let image;
    let finalData;
    if (file) {
        tools.deleteFiles(promotionPath.concat(oldImage));
        image = await tools.saveNewImage(file, promotionPath);
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
 * The deletePromotionHelper function executes a SQL query to delete a promotion from a database table
 * and returns the number of affected rows.
 * @param query - The SQL query to delete a promotion from the database. It should be a string.
 * @param id - The `id` parameter is the identifier of the promotion that you want to delete. It is
 * used to specify which promotion should be deleted from the database.
 * @param callback - The callback parameter is a function that will be called once the query is
 * executed. It takes two parameters: err and result. If there is an error during the query execution,
 * the err parameter will contain the error object. If the query is successful, the result parameter
 * will contain the number of affected rows
 */
function deletePromotionHelper(query, id, callback) {
    connection.query(query, id, (err, result) => {
        if (err) {
            callback(err, null);
        } else {
            callback(null, result.affectedRows);
        }
    });
}

module.exports = {
    insertPromotionHelper,
    getPromotionByBarIdHelper,
    updatePromotionHelper,
    deletePromotionHelper
}