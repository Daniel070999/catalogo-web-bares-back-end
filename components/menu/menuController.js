const menuHelper = require('./menuHelper');

const TableMenu = require('./TableMenu');

const tableMenu = new TableMenu();

const Menu = require('./Menu');

/**
 * The function `getMenuByBarIdController` retrieves menu items based on a bar ID and sends the result
 * as a JSON response.
 * @param req - The `req` parameter is the request object that contains information about the HTTP
 * request made by the client. It includes details such as the request method, headers, body, and query
 * parameters.
 * @param res - The `res` parameter is the response object that is used to send the response back to
 * the client. It contains methods and properties that allow you to control the response, such as
 * setting the status code and sending JSON data. In this code snippet, it is used to send the response
 * with either an
 */
function getMenuByBarIdController(req, res) {
    const idToFind = tableMenu.id_bar;
    const query = tableMenu.getQueryObtainRegistersById(idToFind);
    const columns = [tableMenu.columns];
    const id = req.body.id_bar;
    const values = [columns, id];
    menuHelper.getMenuByBarIdHelper(query, values, (err, result) => {
        if (err) {
            res.status(500).json({ error: 'Error al buscar ' + err });
        } else {
            res.status(200).json({ message: result });
        }
    });
}

/**
 * The function `insertMenuController` handles the insertion of a menu item into a database, including
 * validating the image file and returning appropriate responses.
 * @param req - The `req` parameter is the request object that contains information about the HTTP
 * request made by the client. It includes properties such as the request headers, request body,
 * request method, and request URL.
 * @param res - The `res` parameter is the response object that is used to send the response back to
 * the client. It is an instance of the Express `Response` object.
 */
function insertMenuController(req, res) {
    const file = req.file;
    if (!file) {
        res.status(500).json({ error: 'no se ha seleccionado la imagen' });
    } else {
        const menu = new Menu();
        menu.setNombre = req.body.nombre;
        menu.setDescripcion = req.body.descripcion;
        menu.setPrecio = req.body.precio;
        menu.setId_bar = req.body.id_bar;
        const data = menu.object();
        const query = tableMenu.getQueryInsert();
        menuHelper.insertMenuHelper(query, data, file, (err, result) => {
            if (err) {
                res.status(500).json({ error: 'Error al registrar ' + err });
            } else {
                res.status(200).json({ message: 'Menu registrado: ' + result });
            }
        });
    }
}

module.exports = {
    insertMenuController,
    getMenuByBarIdController
}