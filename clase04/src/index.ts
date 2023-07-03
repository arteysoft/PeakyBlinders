// import 'dotenv/config'
import crearArchivosEnFormaRecursiva from './ejemplos/generar1000Archivos/recursivo'
import {generarArchivo} from './ejemplos/generar1000Archivos/asyncforloop'

console.log(process.argv)
switch (process.argv[2]) {
    case 'creararchivos':
        crearArchivosEnFormaRecursiva()
        // generarArchivo()
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
        break
    case 'pruebamongo':        
        break
    case 'pruebapasswords':        
        break
    default:
        console.log('Atencion, se debe enviar un parametro con la accion a seguir')
}

