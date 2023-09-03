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
        response.status(201).send()
    })

    app.post('/registrarme', (request, response) => {

    })

    app.listen(11000)
}