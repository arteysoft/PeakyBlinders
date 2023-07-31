import express from 'express'
import genUsuario from '../lib/genusuario'
import alumnoRouter from './routes/alumnoRouter'
import loginRouter from './routes/loginRouter'
import autenticarMiddleware from './midleware/autenticarMiddleware'

export default () => {

    let app = express()

    app.use(express.json())
    app.use('/login', loginRouter)
    app.use('/', autenticarMiddleware)
    app.use('/alumno', alumnoRouter)
    app.listen(3000)
}