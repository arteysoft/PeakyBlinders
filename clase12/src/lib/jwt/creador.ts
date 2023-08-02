import {SECRETO, hora} from './commons'
import jwt from 'jsonwebtoken'

let crearJWTParametrizable = (idUsuario, usuario, segundos) => {
    let payload = {
        sub: idUsuario,
        name: usuario,
        iat: hora(),
        exp: hora() + 40
    }

    let token = jwt.sign(JSON.stringify(payload), SECRETO)

    for (let z of token.split('.')) {
        console.log(z)
    }
    console.log('')
    console.log(token)
    return token
}

export let crearJWT = (idUsuario, usuario) => {
    crearJWTParametrizable(idUsuario, usuario, 60)
}

export let refreshToken = (idUsuario, usuario) => {
    crearJWTParametrizable(idUsuario, usuario, 3600)
}

