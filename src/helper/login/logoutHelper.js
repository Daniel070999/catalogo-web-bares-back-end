const logOut = (req, res, callback) => {
    res.clearCookie("access_token");
    res.header('Authorization', null);
    callback(null, 'Sesión cerrada');
};

module.exports = {
    logOut
};
