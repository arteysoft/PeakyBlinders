import express from 'express'
import genUsuario from '../lib/genusuario'
import {insertOne} from '../lib/mongoDriver'

export default () => {

    let app = express()

    app.use(express.json())

    app.get('/alumno/inventar', (request, response) => {
        response
            .status(200)
            .send(genUsuario())
        
    })

    app.get('/alumno', (request, response) => {
        response
            .status(200)
            .send('<h1>alumno roberto</h1>')
    })

    app.post('/alumno', (request, response) => {
        // insertar en mongodb
        console.log(request.body)
        insertOne('clase8', request.body)
            .then(() => {
                response.status(201).send()
            })
            .catch(() => {
                response.status(500).send()
            })
    })

    app.listen(3000)

    console.log('servidorsito')
}