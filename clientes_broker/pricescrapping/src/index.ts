import 'dotenv/config'
import { getQuoteGoogle } from './lib/financeScrapping'
import { crearLog } from './peakybrokerdriver/logger'
import { crearMensaje } from './peakybrokerdriver/commons_mensaje'
import { enviarMensaje } from './peakybrokerdriver/commons_http'
import { aguantar } from './peakybrokerdriver/util'

let logger = crearLog('inicializando finance scrapping')

let objPrecios = {
    'YPF:NYSE' : {
        nombre: 'YPF',
        ultimo: 14.21,
        anterior: 14.21,
        ultimoCierre : 14.21
    }, 
    'CLV23:NYMEX': {
        nombre: 'PETROLEO',
        ultimo: 86.05,
        anterior: 86.05,
        ultimoCierre : 86.05
    }
}

let informarPrecio = async (activo) => {
    let activoActual = objPrecios[activo]

    logger.info('Precio ' + activo, activoActual.ultimo)
    activoActual.diff = Math.round((activoActual.ultimo - activoActual.ultimoCierre) * 100)
    
    if (activoActual.anterior !== activoActual.ultimo) {
        logger.warn('ACA HAY QUE INFORMAR !!!')        
        let mensaje = crearMensaje(
            'com.peakyblinders.financescrapping',
            'com.peakyblinders.evaluadorprecios',
            { activoActual }
            )
        
        let strMensajeJSON = JSON.stringify(mensaje)
        enviarMensaje(strMensajeJSON)
        logger.info(JSON.parse(strMensajeJSON))
        logger.info(objPrecios)
    }
    activoActual.anterior = activoActual.ultimo
}

let init = async () => {
    for (;;) {
        try {
            objPrecios['CLV23:NYMEX'].ultimo = await getQuoteGoogle('CLV23:NYMEX')
            await informarPrecio('CLV23:NYMEX')
            await aguantar(1)
            objPrecios['YPF:NYSE'].ultimo = await getQuoteGoogle('YPF:NYSE')
            await informarPrecio('YPF:NYSE')
            await aguantar(1)
        }
        catch (err) {
            console.log(err)
        }
    }
}

init ()