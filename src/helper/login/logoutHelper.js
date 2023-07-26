const logOut = (req, res, callback) => {
    res.clearCookie("access_token");
    callback(null, 'Sesión cerrada');
};

module.exports = {
    logOut
};
