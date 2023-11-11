const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');

const directoryLogo = path.join(__dirname, '..',  '..', 'uploads', 'images', 'logo');
const directoryImageMenu = path.join(__dirname, '..',  '..', 'uploads', 'images', 'menu');
const directoryImagePromotion = path.join(__dirname, '..',  '..', 'uploads', 'images', 'promocion');
const directoryImageEvent = path.join(__dirname, '..',  '..', 'uploads', 'images', 'evento');

router.get('/logobar/:imageName', (req, res) => {
    const imageName = req.params.imageName;
    const imagePath = path.join(directoryLogo, imageName);
    if (fs.existsSync(imagePath)) {
        res.sendFile(imagePath);
    } else {
        res.status(404).send('Imagen no encontrada');
    }
});

router.get('/logomenu/:imageName', (req, res) => {
    const imageName = req.params.imageName;
    const imagePath = path.join(directoryImageMenu, imageName);
    if (fs.existsSync(imagePath)) {
        res.sendFile(imagePath);
    } else {
        res.status(404).send('Imagen no encontrada');
    }
});

router.get('/logopromotion/:imageName', (req, res) => {
    const imageName = req.params.imageName;
    const imagePath = path.join(directoryImagePromotion, imageName);
    if (fs.existsSync(imagePath)) {
        res.sendFile(imagePath);
    } else {
        res.status(404).send('Imagen no encontrada');
    }
});

router.get('/logoevent/:imageName', (req, res) => {
    const imageName = req.params.imageName;
    const imagePath = path.join(directoryImageEvent, imageName);
    if (fs.existsSync(imagePath)) {
        res.sendFile(imagePath);
    } else {
        res.status(404).send('Imagen no encontrada');
    }
});

module.exports = router;