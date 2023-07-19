// import 'dotenv/config'
import crearArchivosEnFormaRecursiva from './ejemplos/generar1000Archivos/recursivo'
import {generarArchivo} from './ejemplos/generar1000Archivos/asyncforloop'
import {asyncForLoop} from './lib/asyncForLoop'
import {ejemploPromise1} from './ejemplos/ejemplosPromise/ejemploPromise1'
import leerTodosLosArchivos, {mision1, recorrerDirectorioConCallBack} from './ejemplos/leerarchivos/leerTodosLosArchivos'
import {conjeturaDeCollatz} from './ejercicios/carlosYoel'
import {levantarArchivosAMySQL} from './ejemplos/levantarArchivosAMySQL'
import {levantarArchivosAMyMongoDB} from './ejemplos/levantarArchivosAMongoDB'
import server from './appserver/server'
import servidorsito from './appserver/servidorsito'

switch (process.argv[2]) {
    case 'creararchivos':
        // crearArchivosEnFormaRecursiva()
        generarArchivo()
        break
    case 'leerarchivos':
        // leerTodosLosArchivos()
        mision1()
        break;
    case 'teoriapromise':
        ejemploPromise1()
        break
    case 'discoverNumerosPrimos':
        break
    case 'probar':
        break
    case 'server':
        server()
        break
    case 'servidorsito':
        console.log(process.argv)
        servidorsito(parseInt(process.argv[3]))
        break
    case 'cliente':
        break
    case 'levantararchivosmysql':
        levantarArchivosAMySQL()
        break
    case 'levantararchivosmongodb':
        levantarArchivosAMyMongoDB()
        break
    case 'collatz':
        conjeturaDeCollatz()
        break
    case 'pruebamongo':        
        break
    case 'pruebapasswords':        
        break
    default:
        console.log('Atencion, se debe enviar un parametro con la accion a seguir')
}
