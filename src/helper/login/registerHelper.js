const connection = require('../../config/database');

function insertRegister( req,callback) {
  const user = callback.User;
  const pass = callback.Password;
  const email = callback.Email;
  const sql = 'INSERT INTO `catalogowebbdd`.`tregistros` (`usuario`, `clave`, `email`) VALUES (?, ?, ?)';
  connection.query(sql, [user, pass, email], (err, results) => {
    if (err) {
      console.log(err, null);
    } else {
      req(null, "registro");
    }
  });
}

module.exports = {
  insertRegister
};
