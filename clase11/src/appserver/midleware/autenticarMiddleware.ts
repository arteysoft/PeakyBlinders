export default (request, response, next) => {
    console.log('middleware de verificacion de token')

    if (request.headers['x-token'] === 'blabla') {
        next()
        return
    }
    response.status(401).send({mensaje:'el token enviado no es valido'})
}
