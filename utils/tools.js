const fs = require('fs');

/**
 * Save a new image file
 * @param file The file object to be saved.
 * @returns 
 */
function saveNewImage(file, path) {
    return new Promise((resolve, reject) => {
        const fileName = `${Date.now()}_${file.originalname}`;
        const imagePath = path.concat(fileName);

        fs.writeFile(imagePath, file.buffer, (err) => {
            if (err) {
                reject(new Error('Error al guardar la imagen en el servidor'));
            } else {
                resolve(fileName);
            }
        });
    });
}

/**
 * Función para eliminar una imagen por su nombre de archivo y path
 * @param imagePath path de la imagen
 */
function deleteFiles(imagePath) {
    fs.unlink(imagePath, (err) => {
        if (err) {
            console.log(err);
        }
    });
}

/**
 * Método que formatea la fecha en Timestamp para la bdd
 * @param fecha fecha para armar el Timestamp
 * @param hora hora para armar el Timestamp
 * @returns fecha en formato Timestamp
 */
function getFormatDate(fecha, hora) {
    const fecha_ = new Date(fecha);
    const [hora_, minutos_] = hora.split(':');
    const year = fecha_.getFullYear();
    const month = (fecha_.getMonth() + 1).toString().padStart(2, '0');
    const day = fecha_.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day} ${hora_}:${minutos_}`;
}

module.exports = {
    deleteFiles,
    getFormatDate,
    saveNewImage
}