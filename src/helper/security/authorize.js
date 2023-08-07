const { expressjwt: expressJwt } = require('express-jwt');
const secret = 'clavesecreta';

function authorize() {
    return expressJwt({ secret, algorithms: ['HS256'] });
}



function verifyLoggin(req, res, next) {
    const authorization = req.headers.authorization;
    let rolAuth;

    try {
        authorize()(req, res, () => {
            if (req.auth) {
                console.log(req.auth);
                rolAuth = req.auth.rol;
                if (rolAuth) {
                    next();
                    res.status(200).json({ message: rolAuth });
                }
            } else {
                res.status(401).json({ message: 'No está en sesión' });
            }
        });
    } catch (error) {
        res.status(401).json({ message: 'No está en sesión' });
    }

}

module.exports = {
    authorize,
    verifyLoggin
};