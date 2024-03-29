const { expressjwt: expressJwt } = require('express-jwt');
const parameters = require('../utils/parameters');
const secret = parameters.generalPass;

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

/**
 * The function `onlyAdminPermission` checks if the user has admin permission based on their token and
 * role, and returns an error message if they don't.
 * @param req - The `req` parameter is the request object that contains information about the incoming
 * HTTP request, such as headers, query parameters, and request body.
 * @param res - The `res` parameter is the response object that is used to send the response back to
 * the client. It contains methods and properties that allow you to control the response, such as
 * setting the status code, headers, and sending the response body.
 * @param next - The `next` parameter is a callback function that is used to pass control to the next
 * middleware function in the request-response cycle. It is typically used to move to the next
 * middleware function or to the final route handler.
 * @returns a response with a status code and a JSON object containing a message.
 */
function onlyAdminPermission(req, res, next) {
    const token = req.header('Authorization');
    if (!token) {
        return res.status(401).json({ message: 'No ha iniciado sesion' });
    }
    authorize()(req, {}, () => {
        if (req.auth) {
            const rol = req.auth.rol;
            if (rol === '2') {
                next();
            } else {
                return res.status(401).json({ message: 'Usuario no autorizado' });
            }
        } else {
            return res.status(401).json({ message: 'Token de acceso inválido' });
        }
    });
}


/**
 * The function `onlyRootPermission` checks if a user has root permission based on their role before
 * allowing access to a route.
 * @param req - The `req` parameter in the `onlyRootPermission` function is an object representing the
 * HTTP request. It contains information about the request made by the client, such as headers,
 * parameters, body, etc. In this function, the `req` object is used to extract the authorization token
 * from the
 * @param res - The `res` parameter in the `onlyRootPermission` function is the response object in
 * Express.js. It is used to send a response back to the client making the request. In this function,
 * it is being used to send different HTTP responses with error messages based on certain conditions
 * like missing token,
 * @param next - The `next` parameter in the `onlyRootPermission` function is a callback function that
 * is used to pass control to the next middleware function in the stack. When called, it will execute
 * the next middleware function. In this context, `next()` is called if the user has root permission
 * (role
 * @returns In the provided code snippet, the function `onlyRootPermission` is being returned. This
 * function is a middleware function that checks for the presence of a token in the request header,
 * authorizes the token, and then checks if the authenticated user has a role of '3' (which presumably
 * represents root/administrator permissions). If the user has the required role, the `next()` function
 * is called to
 */
function onlyRootPermission(req, res, next) {
    const token = req.header('Authorization');
    if (!token) {
        return res.status(401).json({ message: 'No ha iniciado sesion' });
    }
    authorize()(req, {}, () => {
        if (req.auth) {
            const rol = req.auth.rol;
            if (rol === '3') {
                next();
            } else {
                return res.status(401).json({ message: 'Usuario no autorizado' });
            }
        } else {
            return res.status(401).json({ message: 'Token de acceso inválido' });
        }
    });
}

/**
 * The function `RootAndAdminPermission` checks for a valid token and authorizes users with roles 2 or
 * 3.
 * @param req - The `req` parameter in the `RootAndAdminPermission` function typically represents the
 * HTTP request object, which contains information about the request being made, such as the headers,
 * parameters, body, and more. It is commonly used to access data sent from the client to the server.
 * @param res - The `res` parameter in the `RootAndAdminPermission` function is the response object in
 * Express.js. It is used to send a response back to the client making the HTTP request. In the
 * provided code snippet, the `res` parameter is used to send different HTTP responses with error
 * messages if
 * @param next - The `next` parameter in the `RootAndAdminPermission` function is a callback function
 * that is used to pass control to the next middleware function in the stack. When called, it will
 * execute the next middleware function. If there are no more middleware functions in the stack, it
 * will proceed to the
 * @returns The function `RootAndAdminPermission` is returning different responses based on certain
 * conditions:
 * 1. If there is no token in the request header, it returns a 401 status with a message 'No ha
 * iniciado sesion' (which means 'Not logged in' in Spanish).
 * 2. If the user is authenticated and has a role of '2' or '3', it calls the `
 */
function RootAndAdminPermission(req, res, next) {
    const token = req.header('Authorization');
    if (!token) {
        return res.status(401).json({ message: 'No ha iniciado sesion' });
    }
    authorize()(req, {}, () => {
        if (req.auth) {
            const rol = req.auth.rol;
            if (rol === '2' || rol === '3') {
                next();
            } else {
                return res.status(401).json({ message: 'Usuario no autorizado' });
            }
        } else {
            return res.status(401).json({ message: 'Token de acceso inválido' });
        }
    });
}

/**
 * The function `verifyLoggin` is used to verify if a user is logged in and has the required role
 * authorization.
 * @param req - The `req` parameter is the request object that contains information about the HTTP
 * request made by the client. It includes properties such as the request headers, query parameters,
 * request body, and more.
 * @param res - The `res` parameter is the response object in Express.js. It is used to send the
 * response back to the client.
 * @param next - The `next` parameter is a callback function that is used to pass control to the next
 * middleware function in the request-response cycle. It is typically used to move to the next
 * middleware function or to the final route handler.
 */
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
    obtainRol,
    onlyAdminPermission,
    onlyRootPermission,
    RootAndAdminPermission
};