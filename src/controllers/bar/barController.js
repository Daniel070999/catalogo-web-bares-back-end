const barHelper = require('../../helper/bar/barHelper');

/**
 * Maneja la solicitud HTTP para obtener información de bares.
 *
 * @param {Object} req - El objeto de solicitud HTTP que contiene detalles sobre la solicitud del cliente.
 * @param {Object} res - El objeto de respuesta HTTP que se utilizará para enviar la respuesta al cliente.
 */
function getBarsController(req, res) {
  barHelper.getBarsHelper((err, results) => {
    if (err) {
      res.status(500).json({ error: 'Error al obtener usuarios ' + err });
    } else {
      res.status(200).json(results);
    }
  });
}

module.exports = {
  getBarsController
};