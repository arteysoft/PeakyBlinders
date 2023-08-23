import { verificarToken } from "../../lib/jwt/verificador"

export default (request, response, next) => {
    console.log('middleware de verificacion de token')

    if (request.headers['x-token'] === undefined) {
        response.status(401).send({mensaje:'no se recibio el token de autenticacion'})
        return
    }

    let token = request.headers['x-token']

    try {
        if (verificarToken(token) == false) {
            response.status(401).send({mensaje:'token incorrecto'})
            return
        }
    }
    catch (err) {
        response.status(401).send({mensaje:'token vencido'})
        return
    }
    next()
}
