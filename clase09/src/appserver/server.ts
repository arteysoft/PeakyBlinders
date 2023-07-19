import express from 'express'
import genUsuario from '../lib/genusuario'
import {insertOne, query} from '../lib/mongoDriver'

const NOMBRE_COLECCION = 'clase9'

export default () => {

    let app = express()

    app.use(express.json())

    app.get('/alumno/inventar', (request, response) => {
        response
            .status(200)
            .send(genUsuario())
        
    })

    app.get('/alumno/:id', (request, response) => {

        let id = request.params.id

        query(NOMBRE_COLECCION, {id})
        .then(z => {
            console.log(z)
            if (z.length === 0) {
                response.status(404).send()
                return
            }            
            response.status(200).send(z)
        })
        .catch(z => {
            response.status(500).send()
        })
    })

    app.get('/alumno', (request, response) => {
        console.log(request.query)

        query(NOMBRE_COLECCION, request.query)
        .then(z => {
            console.log(z)
            response.status(200).send(z)
        })
        .catch(z => {
            response.status(500).send()
        })
    })

    app.post('/alumno', (request, response) => {
        console.log(request.body)
        insertOne(NOMBRE_COLECCION, request.body)
            .then(() => {
                response.status(201).send()
            })
            .catch(() => {
                response.status(500).send()
            })
    })

    app.put('/alumno/:id', async (request, response) => {
        let id = request.params.id

        try {
            let resp = await query(NOMBRE_COLECCION, {id})
            if (resp.length === 0) {
                response.status(404).send()
                return
            }
            // Hacer una modificacion sobre el objeto con ese id
        }
        catch {
            response.status(500).send()
        }
    })

    app.delete('/alumno/:id', (request, response) => {
        // Nos falta el metodo de borrar en mongo
        response.status(405).send()
    })

    app.listen(3000)

    console.log('servidorsito')
}