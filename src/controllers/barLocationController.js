const barLocationModel = require('../helper/barLocationHelper');

// Obtener todos los usuarios
function getAllBarsLocation(req, res) {
  barLocationModel.getAllBarsLocation((err, users) => {
    if (err) {
      res.status(500).json({ error: 'Error al obtener usuarios '+err });
    } else {
      res.json(users);
    }
  });
}

module.exports = {
  getAllBarsLocation
};