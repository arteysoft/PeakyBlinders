import { Usuario } from '../interfaces/Usuario'
import genUsuario from '../lib/genusuario'

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

let generarArchivo = () => {

    foreachAsync(['hola', 'que', 'tal'], (elemento, next, onFinish) => {
        console.log(['elemento: ' + elemento])
        next()
    }, 
    () => {
        console.log('finiquito')
    })

    /*
    let z = genUsuario()
    let jsonData  = JSON.stringify(z);
    
    console.log(idx)
    fs.writeFile(directorio +'/'+ z.id + '.json', jsonData, (err) => {
        if (err) throw err;
        if (idx === 10) {
            onFinish(null)
            return
        }
        setTimeout(() => {
            generarArchivo(idx + 1, onFinish)
        }, 2000)
    });
    */
}

generarArchivo()
