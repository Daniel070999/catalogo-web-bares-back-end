const barModel = require('../models/barModel');

// Obtener todos los usuarios
function getAllBars(req, res) {
  barModel.getAllBars((err, users) => {
    if (err) {
      res.status(500).json({ error: 'Error al obtener usuarios '+err });
    } else {
      res.json(users);
    }
  });
}

module.exports = {
  getAllBars
};