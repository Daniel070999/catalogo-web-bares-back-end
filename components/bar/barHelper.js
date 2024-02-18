const connection = require('../../config/database');
const fs = require('fs');
const parameters = require('../../utils/parameters');
const tools = require('../../utils/tools');
const barLogoPath = parameters.filesPath.images.bar_logo;

/**
 * The getBarsHelper function executes a database query using the provided query and values, and calls
 * the callback function with the error and results.
 * @param query - The query parameter is a string that represents the SQL query you want to execute. It
 * can include placeholders for values that will be replaced by the values parameter.
 * @param values - The `values` parameter is an array that contains the values to be used in the query.
 * These values are used to replace the placeholders in the query string.
 * @param callback - The callback parameter is a function that will be called once the query is
 * executed. It takes two parameters: err and results. If there is an error during the query execution,
 * the err parameter will contain the error object. If the query is successful, the results parameter
 * will contain the query results.
 */
function getBarsHelper(query, values, callback) {
  connection.query(query, values, (err, results) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
}

/**
 * The function `getBarsLocationHelper` executes a database query with provided values and returns the
 * results through a callback function.
 * @param query - The query parameter is a string that represents the SQL query you want to execute. It
 * can include placeholders for values that will be replaced by the values parameter.
 * @param values - The `values` parameter is an array that contains the values to be used in the query.
 * These values are used as placeholders in the query string to prevent SQL injection attacks.
 * @param callback - The callback parameter is a function that will be called once the query is
 * executed. It takes two parameters: err and results. If an error occurs during the query execution,
 * the err parameter will contain the error object. Otherwise, the results parameter will contain the
 * results of the query.
 */
function getBarsLocationHelper(query, values, callback) {
  connection.query(query, values, (err, results) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
}

/**
 * The function `insertBarHelper` is a helper function that saves an image file to the server and
 * inserts data into a database table, returning the insert ID.
 * @param query - The query parameter is a string that represents the SQL query that you want to
 * execute. It should be a valid SQL statement that can be executed by the database.
 * @param data - The `data` parameter is an object that contains the data to be inserted into the
 * database. It could be something like:
 * @param file - The `file` parameter is an object that represents the file being uploaded.
 * @param callback - The `callback` parameter is a function that is called once the image is saved on
 * the server and the database query is executed. It is used to handle the result of the operation.
 */
function insertBarHelper(query, data, file, callback) {
  const fileName = `${Date.now()}_${file.originalname}`;
  const imagePath = `uploads/images/logo/${fileName}`;
  const logo = fileName;
  fs.writeFile(imagePath, file.buffer, (err) => {
    if (err) {
      return callback('Error al guardar la imagen en el servidor', null);
    } else {
      const finalData = Object.assign(data, { logo: logo });
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
 * The function `getBarByIdHelper` retrieves a specific bar by its ID from a database using SQL
 * queries.
 * @param idSession - The `idSession` parameter is the session ID that is used to identify a specific
 * session in the database. It is used as a parameter in the SQL query to filter the results based on
 * the session ID.
 * @param values - The `values` parameter is an object that contains various values used in the SQL
 * query. It includes the following properties:
 * @param callback - The callback parameter is a function that will be called once the query is
 * executed. It takes two parameters: err and results. If an error occurs during the query execution,
 * err will contain the error information. Otherwise, results will contain the query results.
 */
function getBarBySessionIdHelper(idSession, values, callback) {
  const sql = `select tb.${values.bar_idbar} from ${values.tableBar} tb
  left join ${values.tableUser} tu on tu.${values.user_idbar}=tb.${values.bar_idbar}
  left join ${values.tableRegister} tr on tr.${values.register_idregister}=tu.${values.user_idregister}
  where tr.${values.register_idregister} = ? and tu.${values.user_idbar} is not null`;
  connection.query(sql, idSession, (err, results) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
}

/**
 * The function `getAllBarByIdHelper` executes a database query with provided values and returns the
 * results through a callback function.
 * @param query - The query parameter is a string that represents the SQL query you want to execute. It
 * should be a valid SQL statement that can be executed by your database.
 * @param values - The `values` parameter is an array that contains the values to be used in the query.
 * These values are used to replace the placeholders in the query string.
 * @param callback - The callback parameter is a function that will be called once the query is
 * executed. It takes two parameters: err and results. If there is an error during the query execution,
 * the err parameter will contain the error object. Otherwise, the results parameter will contain the
 * results of the query.
 */
function getAllBarByIdHelper(query, values, callback) {
  connection.query(query, values, (err, results) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
}

/**
 * The function `updateBarHelper` updates a bar's logo by deleting the old logo file, saving the new
 * logo file on the server, and updating the bar's data in the database with the new logo filename.
 * @param query - The SQL query to update the bar data in the database.
 * @param data - The `data` parameter is an object that contains the updated information for the bar.
 * It could include properties such as the bar's name, address, phone number, etc.
 * @param id - The `id` parameter is the identifier of the bar that needs to be updated. It is used to
 * specify which bar should be updated in the database.
 * @param oldLogo - The oldLogo parameter is the name of the previous logo file that needs to be
 * deleted.
 * @param file - The `file` parameter is an object that represents the file being uploaded. It contains
 * information such as the original name of the file (`file.originalname`) and the file's content
 * (`file.buffer`).
 * @param callback - The `callback` parameter is a function that is called once the update operation is
 * complete. It takes two parameters: `err` and `results`. If an error occurs during the update
 * operation, `err` will contain the error message. Otherwise, `results` will contain the success
 * message.
 */
async function updateBarHelper(query, data, id, oldLogo, file, callback) {
  let image;
  let finalData;
  if (file) {
    tools.deleteFiles(barLogoPath.concat(oldLogo));
    image = await tools.saveNewImage(file, barLogoPath);
    finalData = [Object.assign(Object.assign(data, { logo: image })), id];
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


module.exports = {
  getBarsHelper,
  getBarsLocationHelper,
  insertBarHelper,
  getBarBySessionIdHelper,
  getAllBarByIdHelper,
  updateBarHelper
};
