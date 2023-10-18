const { expressjwt: expressJwt } = require('express-jwt');
const secret = 'clavesecreta';

/**
 * The function `authorize` returns a middleware function that uses JWT authentication with a secret
 * key and the HS256 algorithm.
 * @returns The function `authorize` is returning the result of calling `expressJwt` with the provided
 * options.
 */
function authorize() {
    return expressJwt({ secret, algorithms: ['HS256'] });
}

/**
 * The function `obtainId` returns a promise that resolves with the `id_registro` value from the
 * `req.auth` object if it exists, otherwise it rejects with an error message.
 * @param req - The `req` parameter is an object that represents the HTTP request being made. It
 * typically contains information such as the request headers, request body, and request parameters. In
 * this case, it is being used to check if the user is authenticated and retrieve the user's ID from
 * the `req.auth.id
 * @returns returns a Promise.
 */
function obtainId(req) {
    return new Promise((resolve, reject) => {
        authorize()(req, {}, () => {
            if (req.auth) {
                const id = req.auth.id_registro;
                resolve(id);
            } else {
                reject(new Error('No está en sesión'));
            }
        });
    });
}

/**
 * The function `obtainRol` returns a promise that resolves with the role of the authenticated user or
 * rejects with an error if the user is not in session.
 * @param req - The `req` parameter is an object that represents the HTTP request being made. It
 * typically contains information such as the request headers, request body, and request parameters. In
 * this case, it is being used to check if the user is authenticated and to obtain the role of the
 * authenticated user.
 * @returns The function `obtainRol` returns a Promise.
 */
function obtainRol(req) {
    return new Promise((resolve, reject) => {
        authorize()(req, {}, () => {
            if (req.auth) {
                const rol = req.auth.rol;
                resolve(rol);
            } else {
                reject(new Error('No está en sesión'));
            }
        });
    });
}

function verifyLoggin(req, res, next) {
    let rolAuth;
    try {
        authorize()(req, res, () => {
            if (req.auth) {
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
        res.status(401).json({ error: 'No está en sesión' });
    }
}

module.exports = {
    authorize,
    verifyLoggin,
    obtainId,
    obtainRol
};