const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');

const directoryLogo = path.join(__dirname, '..', '..', '..', 'uploads', 'images', 'logo');
const directoryImageMenu = path.join(__dirname, '..', '..', '..', 'uploads', 'images', 'menu');

router.get('/logobar/:imageName', (req, res) => {
    const imageName = req.params.imageName;
    const imagePath = path.join(directoryLogo, imageName);
    // Verifica si el archivo de imagen existe en el directorio
    if (fs.existsSync(imagePath)) {
        // Si existe, envía el archivo de imagen como respuesta
        res.sendFile(imagePath);
    } else {
        // Si no existe, envía una respuesta de error
        res.status(404).send('Imagen no encontrada');
    }
});

router.get('/logomenu/:imageName', (req, res) => {
    const imageName = req.params.imageName;
    const imagePath = path.join(directoryImageMenu, imageName);
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