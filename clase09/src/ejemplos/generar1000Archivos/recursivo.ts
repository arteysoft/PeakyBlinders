import { Usuario } from '../../interfaces/Usuario'
import genUsuario from '../../lib/genusuario'

const fs = require('fs');
const directorio = '/var/peakyblinders';

let generarArchivo = (idx, onFinish) => {
    let z = genUsuario()
    let jsonData  = JSON.stringify(z);
    
    console.log(['generando archivo: ', idx])
    fs.writeFile(directorio +'/'+ z.id + '.json', jsonData, (err) => {
        if (err) throw err;
        if (idx === 10000) {
            onFinish(null)
            return
        }
        setTimeout(() => {
            generarArchivo(idx + 1, onFinish)
        }, 0)
    });
}

export default () => {
    generarArchivo(1, err => {
        console.log('terminado')
    })
}