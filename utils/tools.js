const fs = require('fs');

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
    getFormatDate
}