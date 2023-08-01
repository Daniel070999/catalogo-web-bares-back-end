const { expressjwt: expressJwt } = require('express-jwt');
const { secret } = 'clavesecreta';

function authorize(roles = []) {
    /**
     * Se obtienen el rol en sesion (Admin, User)
     */
    if (typeof roles === 'string') {
        roles = [roles];
    }
    return [
        expressJwt({ secret, algorithms: ['HS256'] }),
        // verifica si tiene acceso en base a su rol
        (req, res, next) => {
            if (roles.length && !roles.includes(req.auth.role)) {
                // en caso que no tenga el rol necesario, no se autoriza
                return res.status(401).json({ message: 'No tiene permisos' });
            }
            next();
        }
    ];
}

function verifyLoggin(req, res, next) {
    // Verificamos si 'authorization' existe en 'req.headers' antes de usar split
    const authorization = req.body.auth;
    const cookie = req.body.cookie;
    
    try {
        if (authorization && cookie && authorization.split(' ')[1] === cookie) {
            // Llamamos a next() para permitir que el flujo continúe hacia la siguiente capa del middleware (en este caso, el guard de Angular).
            next();
            res.status(200).json({ message: 'Ok' });
        } else {
            // Si la verificación falla, enviamos una respuesta con un código de estado 401 (Unauthorized) en lugar de 200.
            res.status(401).json({ message: 'No está en sesión' });
        }
    } catch (error) {
        res.status(401).json({ message: 'No está en sesión' });
    }

}

module.exports = {
    authorize,
    verifyLoggin
};