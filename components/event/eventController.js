const eventHelper = require('./eventHelper');

const TableEvent = require('./TableEvent');

const tableEvent = new TableEvent();

const Event = require('./Event');

/**
 * The function `getEventByBarIdController` retrieves Event items based on a bar ID and sends the result
 * as a JSON response.
 * @param req - The `req` parameter is the request object that contains information about the HTTP
 * request made by the client. It includes details such as the request method, headers, body, and query
 * parameters.
 * @param res - The `res` parameter is the response object that is used to send the response back to
 * the client. It contains methods and properties that allow you to control the response, such as
 * setting the status code and sending JSON data. In this code snippet, it is used to send the response
 * with either an
 */
function getEventByBarIdController(req, res) {
    const idToFind = tableEvent.id_bar;
    const query = tableEvent.getQueryObtainRegistersById(idToFind);
    const columns = [tableEvent.columns];
    const id = req.body.id_bar;
    const values = [columns, id];
    eventHelper.getEventByBarIdHelper(query, values, (err, result) => {
        if (err) {
            res.status(500).json({ error: 'Error al buscar ' + err });
        } else {
            res.status(200).json({ message: result });
        }
    });
}

/**
 * The function `insertEventController` handles the insertion of a Event item into a database, including
 * validating the image file and returning appropriate responses.
 * @param req - The `req` parameter is the request object that contains information about the HTTP
 * request made by the client. It includes properties such as the request headers, request body,
 * request method, and request URL.
 * @param res - The `res` parameter is the response object that is used to send the response back to
 * the client. It is an instance of the Express `Response` object.
 */
function insertEventController(req, res) {
    const info = JSON.parse(req.body.data);
    const file = req.file;
    if (!file) {
        res.status(500).json({ error: 'no se ha seleccionado la imagen' });
    } else {
        const event = new Event();
        event.setNombre = info.nombre;
        event.setDescripcion = info.descripcion;
        event.setFecha = info.fecha;
        event.setId_bar = info.id_bar;
        const data = event.object();
        const query = tableEvent.getQueryInsert();
        eventHelper.insertEventHelper(query, data, file, (err, result) => {
            if (err) {
                res.status(500).json({ error: 'Error al registrar ' + err });
            } else {
                res.status(200).json({ message: 'Event registrada: ' + result });
            }
        });
    }
}

/**
 * The function `updateEventController` handles the updating of an event by receiving a file,
 * extracting data from the request body, and calling a helper function to update the event in the
 * database.
 * @param req - The `req` parameter is the request object that contains information about the HTTP
 * request made by the client. It includes properties such as `req.file` (the uploaded file),
 * `req.body` (the request body), and `req.params` (the route parameters).
 * @param res - The `res` parameter is the response object that is used to send the response back to
 * the client. It is an instance of the Express `Response` object.
 */
function updateEventController(req, res) {
    const file = req.file;
    if (!file) {
        res.status(500).json({ error: 'no se ha seleccionado la imagen' });
    } else {
        const event = new Event();
        event.setNombre = req.body.nombre;
        event.setDescripcion = req.body.descripcion;
        event.setFecha = req.body.fecha;
        const id = req.body.id_evento;
        const data = event.object();
        const oldImage = req.body.old_image;
        const idToFind = tableEvent.id_evento;
        const query = tableEvent.getQueryUpdateById(idToFind);
        eventHelper.updateEventHelper(query, data, id, oldImage, file, (err, result) => {
            if (err) {
                res.status(500).json({ error: 'Error al actualizar ' + err });
            } else {
                res.status(200).json({ message: 'Menu actualizado: ' + result });
            }
        });
    }
}

module.exports = {
    insertEventController,
    getEventByBarIdController,
    updateEventController
}