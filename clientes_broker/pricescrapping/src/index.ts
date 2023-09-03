import 'dotenv/config'
import { getQuoteGoogle } from './lib/financeScrapping'
import { crearLog } from './peakybrokerdriver/logger'
import { crearMensaje } from './peakybrokerdriver/commons_mensaje'
import { enviarMensaje } from './peakybrokerdriver/commons_http'


let logger = crearLog('inicializando finance scrapping')

let ultimoPrecio = null
let precioAnterior = null;

let analizarInformar = async (precio) => {
    try {
        logger.info('Precio NYSE:YPF', precio)
        ultimoPrecio = precio    
        
        if (precioAnterior !== ultimoPrecio) {
            logger.warn('ACA HAY QUE INFORMAR !!!')
            let mensaje = crearMensaje(
                'com.peakyblinders.financescrapping', 
                'com.peakyblinders.evaluadorprecios',
                { precio: ultimoPrecio }
                )
            
            let strMensajeJSON = JSON.stringify(mensaje)

            // enviarMensaje(strMensajeJSON);
            logger.info(JSON.stringify(strMensajeJSON))
        }
        precioAnterior = ultimoPrecio
    }
    catch (err) {
        logger.error(err)
    }
}

for (;;) {
    getQuoteGoogle()
        .then(analizarInformar)
}
