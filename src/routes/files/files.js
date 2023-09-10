const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');

const imagesDirectory = path.join(__dirname, '..', '..', '..', 'uploads', 'images');

router.get('/images/:imageName', (req, res) => {
    const imageName = req.params.imageName;
    const imagePath = path.join(imagesDirectory, imageName);
    // Verifica si el archivo de imagen existe en el directorio
    if (fs.existsSync(imagePath)) {
        // Si existe, envía el archivo de imagen como respuesta
        res.sendFile(imagePath);
    } else {
        // Si no existe, envía una respuesta de error
        res.status(404).send('Imagen no encontrada');
    }
});
module.exports = router;