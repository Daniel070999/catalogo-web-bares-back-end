const fs = require('fs');


/**
 * The function `saveNewImage` saves a new image file to a specified path on the server using a Promise
 * in JavaScript.
 * @param file - The `file` parameter in the `saveNewImage` function is typically an object that
 * represents an image file uploaded by a user. It usually contains information such as the original
 * name of the file, the buffer containing the file data, and other metadata related to the file.
 * @param path - The `path` parameter in the `saveNewImage` function represents the directory path
 * where the image file will be saved on the server. It is a string that specifies the location where
 * the image file will be stored. For example, it could be something like '/uploads/images/'.
 * @returns The function `saveNewImage` returns a Promise.
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
 * The function `deleteFiles` deletes a file located at the specified `imagePath` in JavaScript.
 * @param imagePath - The `imagePath` parameter in the `deleteFiles` function is the path to the image
 * file that you want to delete. This function uses Node.js `fs.unlink` method to delete the file
 * located at the specified `imagePath`.
 */
function deleteFiles(imagePath) {
    fs.unlink(imagePath, (err) => {
        if (err) {
            console.log(err);
        }
    });
}


/**
 * The function `getFormatDate` takes a date and time as input and returns a formatted date-time string
 * in the format "YYYY-MM-DD HH:MM".
 * @param fecha - The `fecha` parameter is a date string in the format "YYYY-MM-DD" representing a
 * specific date.
 * @param hora - The `hora` parameter is a string representing the time in the format "HH:MM", where HH
 * is the hour and MM is the minutes.
 * @returns The function `getFormatDate` takes a date string and a time string as input, converts the
 * date and time to the desired format, and returns a formatted date-time string in the format
 * "YYYY-MM-DD HH:mm".
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