import {insertOne} from '../lib/mongoDriver'
import {recorrerDirectorioConCallBack} from '../ejemplos/leerarchivos/leerTodosLosArchivos'

const NOMBRE_BASE_DE_DATOS = 'peakyBlinders__clase7'

export let levantarArchivosAMyMongoDB = () => {
    recorrerDirectorioConCallBack(async (objUsuario) => {
        insertOne('clientes', objUsuario)
    })
}