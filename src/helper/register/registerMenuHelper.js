const connection = require('../../config/database');
const bdd = require('../../Models/sql/bddTables');
const utils = require('../../helper/utils');
const fs = require('fs');

function insertRegisterMenu(file, req, callback) {
    const { nombre, descripcion, precio, id_bar } = req.body;

    if (!file) {
        return callback("No se ha subido una imagen", null);
    }

    const fileName = `${Date.now()}_${file.originalname}`;
    const imagePath = `uploads/images/menu/${fileName}`;
    const image = fileName;

    fs.writeFile(imagePath, file.buffer, (err) => {
        if (err) {
            console.error(err);
            return callback("Error al guardar la imagen en el servidor", null);
        }

        const registerData = [nombre, descripcion, precio, id_bar, image];
        const sql = utils.insertBDD(bdd.tmenu);

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
function insertRegisterBar(file, req, callback) {
    const { nombre, lema, descripcion } = req.body;

    if (!file) {
        return callback("No se ha subido una imagen", null);
    }

    const fileName = `${Date.now()}_${file.originalname}`;
    const imagePath = `uploads/images/logo/${fileName}`;
    const logo = fileName;

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
