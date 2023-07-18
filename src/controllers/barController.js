const barModel = require('../helper/barHelper');

// Obtener todos los usuarios
function getAllBars(req, res) {
  barModel.getAllBars((err, bars) => {
    if (err) {
      res.status(500).json({ error: 'Error al obtener usuarios '+err });
    } else {
      res.json(bars);
    }
  });
}

module.exports = {
  getAllBars
};