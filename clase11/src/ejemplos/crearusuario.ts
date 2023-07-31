import {insertOne, query, updateOne, deleteOne} from '../lib/mongoDriver'
import sha256 from 'sha256'
import {v4 as uuid} from 'uuid'

/*
Conectar al mongodb
vamos a crear un usuario y una password en clear
a la password le sumamos un salt
la pasamos por el agoritmo sha256
*/

export let validarUsuario = async (usuario, password) => {
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

export default () => {
    // crear un usuario
    let salt = [uuid(), uuid()].join('')
    let passwordEncriptada = sha256(['max33RedBull', salt].join(''))

    let documento = {
        usuario: 'max',
        passwordEncriptada,
        salt
    }
    insertOne('usuarios', documento)
}
