import { Usuario } from '../../interfaces/Usuario'
import genUsuario from '../../lib/genusuario'
import {asyncForLoop} from '../../lib/asyncForLoop'


const fs = require('fs');
const directorio = '/var/peakyblinders';

export let generarArchivo = () => {
    asyncForLoop(100, (elemento, next, onFinish) => {
        let z = genUsuario()
        let jsonData  = JSON.stringify(z);
    
        console.log(['generando archivo: ', elemento])
        fs.writeFile(directorio +'/'+ z.id + '.json', jsonData, (err) => {
            if (err) {
                onFinish(['Guarda que hubo un error', err])
                return
            }
            next()
        });
    }, 
    (err) => {
        if (err) {
            console.log(err)
            return
        }
        console.log('Todo termino correctamente')
    })
}


