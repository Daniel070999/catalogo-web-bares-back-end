const promotionHelper = require('./promotionHelper');

const TablePromotion = require('./TablePromotion');

const tablePromotion = new TablePromotion();

const Promotion = require('./Promotion');

/**
 * The function `getPromotionByBarIdController` retrieves Promotion items based on a bar ID and sends the result
 * as a JSON response.
 * @param req - The `req` parameter is the request object that contains information about the HTTP
 * request made by the client. It includes details such as the request method, headers, body, and query
 * parameters.
 * @param res - The `res` parameter is the response object that is used to send the response back to
 * the client. It contains methods and properties that allow you to control the response, such as
 * setting the status code and sending JSON data. In this code snippet, it is used to send the response
 * with either an
 */
function getPromotionByBarIdController(req, res) {
    const idToFind = tablePromotion.id_bar;
    const query = tablePromotion.getQueryObtainRegistersById(idToFind);
    const columns = [tablePromotion.columns];
    const id = req.body.id_bar;
    const values = [columns, id];
    promotionHelper.getPromotionByBarIdHelper(query, values, (err, result) => {
        if (err) {
            res.status(500).json({ error: 'Error al buscar ' + err });
        } else {
            res.status(200).json({ message: result });
        }
    });
}

/**
 * The function `insertPromotionController` handles the insertion of a Promotion item into a database, including
 * validating the image file and returning appropriate responses.
 * @param req - The `req` parameter is the request object that contains information about the HTTP
 * request made by the client. It includes properties such as the request headers, request body,
 * request method, and request URL.
 * @param res - The `res` parameter is the response object that is used to send the response back to
 * the client. It is an instance of the Express `Response` object.
 */
function insertPromotionController(req, res) {
    const info = JSON.parse(req.body.data);
    const file = req.file;
    if (!file) {
        res.status(500).json({ error: 'no se ha seleccionado la imagen' });
    } else {
        const fechaInicio = getFormatDate(info.fecha_inicio, info.hora_inicio);
        const fechaFin = getFormatDate(info.fecha_fin, info.hora_fin);
        const promotion = new Promotion();
        promotion.setNombre = info.nombre;
        promotion.setDescripcion = info.descripcion;
        promotion.setFecha_inicio = fechaInicio;
        promotion.setFecha_fin = fechaFin;
        promotion.setId_bar = info.id_bar;
        const data = promotion.object();
        const query = tablePromotion.getQueryInsert();
        promotionHelper.insertPromotionHelper(query, data, file, (err, result) => {
            if (err) {
                res.status(500).json({ error: 'Error al registrar ' + err });
            } else {
                res.status(200).json({ message: 'Promotion registrada: ' + result });
            }
        });
    }
}

function updatePromotionController(req, res) {
    console.log(req.body);
}

function getFormatDate(fecha, hora) {
    const fecha_ = new Date(fecha);
    const [hora_, minutos_] = hora.split(':');
    const year = fecha_.getFullYear();
    const month = (fecha_.getMonth() + 1).toString().padStart(2, '0');
    const day = fecha_.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day} ${hora_}:${minutos_}`;
}

module.exports = {
    insertPromotionController,
    getPromotionByBarIdController,
    updatePromotionController
}