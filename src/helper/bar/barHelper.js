const connection = require('../../config/database');
const TableBar = require('../../Models/Tables/TableBar');

/**
 * Obtiene todos los registros de los Bares
 * @param {function} callback La función de devolución que se ejecutará cuando se 
 *                            complete la operación, debe seguir el orden de (err) y lueg (result).
 * @example function(err, result) { ... }
 */
function getBarsHelper(callback) {
  const tableBar = new TableBar();
  const queryGetData = tableBar.getData();
  const valuesTableBar = tableBar.columns;
  const tableNameBar = tableBar.table;
  const buildValues = valuesTableBar;
  buildValues.push(tableNameBar);

  connection.query(queryGetData, buildValues, (err, results) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
}

module.exports = {
  getBarsHelper
};
