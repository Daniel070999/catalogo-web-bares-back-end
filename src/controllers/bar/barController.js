const barHelper = require('../../helper/bar/barHelper');
const getId = require('../../helper/security/authorize');

const TableBar = require('../../Models/Tables/TableBar');
const TableBarLocation = require('../../Models/Tables/TableBarLocation');
const TableUser = require('../../Models/Tables/TableUser');
const TableRegister = require('../../Models/Tables/TableRegister');

const tableBar = new TableBar();
const tableBarLocation = new TableBarLocation();
const tableUser = new TableUser();
const tableRegister = new TableRegister();

const Bar = require('../../Models/Class/Bar');

/**
 * The function `getBarsController` retrieves bar data from a database and sends it as a JSON response.
 * @param req - The `req` parameter is the request object that contains information about the HTTP
 * request made by the client. It includes details such as the request method, headers, query
 * parameters, and body.
 * @param res - The `res` parameter is the response object that is used to send the response back to
 * the client. It contains methods and properties that allow you to control the response, such as
 * setting the status code and sending JSON data.
 */
function getBarsController(req, res) {
  const query = tableBar.getQueryObtainRegisters();
  const values = tableBar.columns;
  barHelper.getBarsHelper(query, [values], (err, result) => {
    if (err) {
      res.status(500).json({ error: 'Error al obtener los bares: ' + err });
    } else {
      res.status(200).json({ message: result });
    }
  });
}

/**
 * The function `getBarsLocationController` retrieves the location of bars from a database and sends
 * the result as a JSON response.
 * @param req - The `req` parameter is the request object, which contains information about the HTTP
 * request made by the client. It includes details such as the request method, headers, query
 * parameters, and body.
 * @param res - The `res` parameter is the response object that is used to send the response back to
 * the client. It contains methods and properties that allow you to control the response, such as
 * setting the status code and sending JSON data.
 */
function getBarsLocationController(req, res) {
  const query = tableBarLocation.getQueryObtainRegisters();
  const values = tableBarLocation.columns;
  barHelper.getBarsLocationHelper(query, [values], (err, result) => {
    if (err) {
      res.status(500).json({ error: 'Error al obtener la ubicacion de los bares ' + err });
    } else {
      res.status(200).json({ message: result });
    }
  });
}

/**
 * The function `insertBarController` handles the insertion of a new bar into a database, including
 * validating the presence of an image file and returning appropriate responses.
 * @param req - The `req` parameter is the request object, which contains information about the HTTP
 * request made by the client. It includes properties such as `req.file` (the uploaded file),
 * `req.body` (the body of the request), and others.
 * @param res - The `res` parameter is the response object that is used to send the response back to
 * the client. It is an instance of the Express response object.
 */
function insertBarController(req, res) {
  const file = req.file;
  if (!file) {
    res.status(500).json({ error: 'no se ha seleccionado la imagen' });
  } else {
    const bar = new Bar();
    bar.setNombre = req.body.nombre;
    bar.setLema = req.body.lema;
    bar.descripcion = req.body.descripcion;
    const data = bar.object();
    const query = tableBar.getQueryInsert();
    barHelper.insertBarHelper(query, data, file, (err, result) => {
      if (err) {
        res.status(500).json({ error: 'Error al registrar ' + err });
      } else {
        res.status(200).json({ message: 'Bar registrado: ' + result });
      }
    });
  }
}

/**
 * The function `getBarByIdController` retrieves a bar's information based on the ID of the user in
 * session.
 * @param req - The `req` parameter is the request object that contains information about the HTTP
 * request made by the client. It includes details such as the request headers, request parameters,
 * request body, etc. This parameter is used to extract the necessary information needed to retrieve
 * the bar by its ID.
 * @param res - The `res` parameter is the response object that is used to send the response back to
 * the client. It is an instance of the Express `Response` object.
 */
function getBarBySessionIdController(req, res) {
  getId.obtainId(req).then(id => {
    const idSession = [id];
    const tBar = tableBar.table;
    const tUser = tableUser.table;
    const tRegister = tableRegister.table;
    const barIdBar = tableBar.id_bar;
    const userIdBar = tableUser.id_bar;
    const userIdRegistro = tableUser.id_registro;
    const registerIdRegistro = tableRegister.id_registro;
    const values = {
      tableBar: tBar,
      tableUser: tUser,
      tableRegister: tRegister,
      bar_idbar: barIdBar,
      user_idbar: userIdBar,
      user_idregister: userIdRegistro,
      register_idregister: registerIdRegistro
    };
    barHelper.getBarBySessionIdHelper(idSession, values, (err, result) => {
      if (err) {
        res.status(500).json({ error: 'Error al obtener el id del bar ' + err });
      } else {
        res.status(200).json(result);
      }
    });
  }).catch(error => {
    res.status(401).json({ message: error.message });
  });
}

/**
 * The function getAllBarByIdController retrieves all bars by their ID and sends the result as a JSON
 * response.
 * @param req - The `req` parameter is the request object that contains information about the HTTP
 * request made by the client. It includes properties such as the request headers, request body,
 * request method, and request URL.
 * @param res - The `res` parameter is the response object that is used to send the response back to
 * the client. It contains methods and properties that allow you to control the response, such as
 * setting the status code and sending JSON data.
 */
function getAllBarByIdController(req, res) {
  const idToFind = tableBar.id_bar;
  const query = tableBar.getQueryObtainRegistersById(idToFind);
  const columns = tableBar.columns;
  const id = [req.body.id_bar];
  const values = [columns, id];
  barHelper.getAllBarByIdHelper(query, values, (err, result) => {
    if (err) {
      res.status(500).json({ error: 'Error al registrar ' + err });
    } else {
      res.status(200).json(result);
    }
  });
}

module.exports = {
  getBarsController,
  getBarsLocationController,
  insertBarController,
  getBarBySessionIdController,
  getAllBarByIdController
};