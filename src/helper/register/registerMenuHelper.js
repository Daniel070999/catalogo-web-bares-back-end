const connection = require('../../config/database');
const bdd = require('../../Models/sql/bddTables');
const utils = require('../../helper/utils');
const fs = require('fs');

function insertRegisterMenu(req, callback) {
    const { nombre, descripcion, precio, id_bar } = callback;
    const registerData = [nombre, descripcion, precio, id_bar];
    const sql = utils.insertBDD(bdd.tmenu);
    connection.query(sql, registerData, (err, results) => {
        if (err) {
            console.log(err, null);
        } else {
            req(null, results.insertId);
        }
    });
}
function insertRegisterBar(file, req, callback) {
    console.log(req.body);
    console.log(callback);
    const { nombre, lema, descripcion } = req.body;

    // Verifica si se ha subido una imagen
    if (!file) {
        return callback("No se ha subido una imagen", null);
    }

    // La imagen se encuentra en req.file.buffer
    // Guarda la imagen en un directorio en el servidor
    const fileName = `${Date.now()}_${file.originalname}`;
    const imagePath = `uploads/images/${fileName}`; // Ajusta la ruta según tu estructura de directorios
    const logo = fileName;

    // Guarda la imagen en el directorio
    fs.writeFile(imagePath, file.buffer, (err) => {
        if (err) {
            console.error(err);
            return callback("Error al guardar la imagen en el servidor", null);
        }

        const registerData = [nombre, lema, descripcion, logo];
        const sql = utils.insertBDD(bdd.tbar);

        connection.query(sql, registerData, (err, results) => {
            if (err) {
                console.error(err);
                callback(err, null);
            } else {
                callback(null, results.insertId);
            }
        });
    });
}



module.exports = {
    insertRegisterMenu,
    insertRegisterBar
};
