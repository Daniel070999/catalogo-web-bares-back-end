/**
 * Roles definidos para el uso del sistema
 */
const rol = {
    user: '1',
    admin: '2',
    root: '3'
};

/**
 * Clave general que se usa para crear el JWT
 */
const generalPass = 'clavesecreta';

/**
 * Intentos maximos permitidos para logearse
 */
const intentosLogin = 2;

/**
 * Direcciones de los directorios del servidor para guardar los archivos
 */
const filesPath = {
    images: {
        bar_logo: 'uploads/images/logo/',
        menu: 'uploads/images/menu/',
        promocion: 'uploads/images/promocion/',
        evento: 'uploads/images/evento/',
    }
};

module.exports = {
    rol,
    generalPass,
    intentosLogin,
    filesPath
}