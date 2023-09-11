import express from 'express'
import genUsuario from '../lib/genusuario'
import alumnoRouter from './routes/alumnoRouter'
import loginRouter from './routes/loginRouter'
import autenticarMiddleware from './midleware/autenticarMiddleware'

export default () => {

    let app = express()

    app.use(express.json())
    app.use('/api/login', loginRouter)
    app.use('/api/', autenticarMiddleware)
    app.use('/api/alumno', alumnoRouter)
    app.listen(3000)
}