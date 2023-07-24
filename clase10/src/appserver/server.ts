import express from 'express'
import genUsuario from '../lib/genusuario'
import alumnoRouter from './routes/alumnoRouter'

export default () => {

    let app = express()

    app.use(express.json())
    app.use('/', (request, response, next) => {
        console.log('pasando por el middleware /')
        // O bien contesto algo, o bien llamo a next
        next()
    })
    app.use('/', (request, response, next) => {
        console.log('pasando por el middleware numero 2 /')
        // O bien contesto algo, o bien llamo a next

        if (request.headers['x-password'] === 'mipass') {
            next()
            return
        }
        response
            .status(401)            
            .end()
        
    })

    app.use('/alumno', alumnoRouter)

    app.listen(3000)
}