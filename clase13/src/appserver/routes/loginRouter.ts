import express from 'express'
import genUsuario from '../../lib/genusuario'
import sha256 from 'sha256'
import {insertOne, query, updateOne, deleteOne} from '../../lib/mongoDriver'
import { crearJWT } from '../../lib/jwt/creador'

const NOMBRE_COLECCION = 'usuarios'

let validarUsuario = async (usuario, password) => {
    let docs:any = await query('usuarios', {usuario})
    if (docs.length === 0) {
        throw new Error('No se encontro el usuario')
    }
    let doc:any = docs[0]    
    let passwordTesteo = sha256([password, doc.salt].join(''))
    console.log(passwordTesteo)
    console.log(doc.passwordEncriptada)
    return (passwordTesteo === doc.passwordEncriptada)
}

export default express.Router()    
    .post('', async (request, response) => {
        console.log(request)
        let {usuario, password} = request.body
        if (await validarUsuario(usuario, password)) {
            response.status(200).send({token: crearJWT(usuario, usuario)})
            return
        }
        response.status(401).send()
    })
    .post('/refresh', async (request, response) => {
        // ACA LO QUE HAY QUE VALIDAR ES EL REFRESH TOKEN Y LUEGO TODO EL MECANISMO NUEVAMENTE
        response.status(401).send()
    })    

