const mysql = require('mysql');

const connection = mysql.createConnection({
  host: '127.0.0.1',     // Dirección del servidor MySQL
  user: 'root',       // Usuario de la base de datos
  password: '', // Contraseña del usuario
  database: 'catalogowebbdd'  // Nombre de la base de datos
});

/* The `connection.connect()` function is used to establish a connection to the MySQL database server.
It takes a callback function as a parameter, which will be executed once the connection is
established or if there is an error. */
connection.connect((err) => {
  if (err) {
    console.error('Error al conectar con MySQL:', err);
  } else {
    console.log('Conexión exitosa a la base de datos.');
  }
});

module.exports = connection;
