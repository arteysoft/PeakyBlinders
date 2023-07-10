// import 'dotenv/config'
import crearArchivosEnFormaRecursiva from './ejemplos/generar1000Archivos/recursivo'
import {generarArchivo} from './ejemplos/generar1000Archivos/asyncforloop'
import {asyncForLoop} from './lib/asyncForLoop'
import {ejemploPromise1} from './ejemplos/ejemplosPromise/ejemploPromise1'
import leerTodosLosArchivos, {mision1} from './ejemplos/leerarchivos/leerTodosLosArchivos'
import {conjeturaDeCollatz} from './ejercicios/carlosYoel'

console.log(process.argv)
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
        break
    case 'cliente':
        break
    case 'levantararchivos':
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
