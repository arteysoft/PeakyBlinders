import express from 'express'
import { crearLog } from '../peakybrokerdriver/logger'
import { guardarMensaje, cambiarStatus, query, queryNewMessage } from '../peakybrokerdriver/mysql'

export default () => {

    let logger = crearLog('server.ts')

    let app = express()

    app.use(express.json())    
    app.post('/enviarmensaje', async (request, response) => {       
        let body = request.body
        logger.info('Llega un mensaje con id', body.id)
        logger.info(JSON.stringify(body))
        await cambiarStatus(body.id)
        let mensaje = await queryNewMessage(body.id)
        console.log(mensaje)
        mensaje.payload = JSON.parse(mensaje.payload)
        console.log(mensaje)
        if (mensaje.payload.activoActual.diff < -40) {
            console.log('********************************')
            console.log('EVALUAR ORDEN DE COMPRA !!!')
            console.log('********************************')
        } 
        response.status(200).send()
    })

    app.post('/registrarme', (request, response) => {
        // Vamos a hacer de cuenta que este esta implementado, pero 
        // solo vamos a tener una tabla con nombres y host y puertos asociados
    })



    app.listen(process.env.PORT)
}

let backoffice = () => {
    console.log('backoffice, ver todos los status que esten en y que sean para com.peakyblinders.evaluadorprecios')
    setTimeout(backoffice, 3000)
}

setTimeout(backoffice, 0)

