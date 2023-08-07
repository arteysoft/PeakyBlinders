import { Usuario } from '../interfaces/Usuario'
import genUsuario from '../lib/genusuario'
import {insertOne} from '../lib/mongoDriver'

const NOMBRE_COLECCION = 'clase10'

export default async () => {
    for (let x of Array(1000)) {
        let usu = genUsuario()
        insertOne(NOMBRE_COLECCION, usu)
    }
}