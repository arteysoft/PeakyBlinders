import express from 'express'
import { crearLog } from '../peakybrokerdriver/logger'
import { guardarMensaje } from '../lib/mysql'

export default () => {

    let logger = crearLog('server.ts')

    let app = express()

    app.use(express.json())
    app.post('/enviarmensaje', async (request, response) => {
        logger.info('Llega un mensaje')
        let body = request.body
        logger.info(JSON.stringify(body))
        await guardarMensaje(body)
        console.log(body.destino)
        console.log(global.mapaMircoservicios[body.destino])
        // Es condicion que se haya hecho la entrega del mensaje para enviar un 201 ?
        // solo alcanzaria ya guardar el mensaje en la base
        // Podria el broker tener un proceso en background donde por cada status 0 ? envia el 
        // mensaje una y otra vez. x puede que el destino no este levantado
        response.status(201).send()        
    })

    app.post('/registrarme', (request, response) => {
        // Vamos a hacer de cuenta que este esta implementado, pero 
        // solo vamos a tener una tabla con nombres y host y puertos asociados
    })

    app.listen(11000)
}