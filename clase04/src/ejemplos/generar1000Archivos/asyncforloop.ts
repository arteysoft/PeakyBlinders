import { Usuario } from '../../interfaces/Usuario'
import genUsuario from '../../lib/genusuario'

const fs = require('fs');
const directorio = '/var/peakyblinders';

function foreachAsync(arr, callBack, onFinish) {
    let idx = 0;
    (function foreachAsyncInterna() {
        if (idx == arr.length) {
            onFinish();
            return;
        }
        callBack(arr[idx], ()=>{
            setTimeout(foreachAsyncInterna, 1);
        }, ()=>{
            onFinish('el proceso aborto');
        });
        idx++;
    }());
}

export let generarArchivo = () => {
    foreachAsync(['hola', 'que', 'tal'], (elemento, next, onFinish) => {
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


