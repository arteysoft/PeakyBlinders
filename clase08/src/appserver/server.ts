import express from 'express'

export default () => {

    let app = express()

    app.get('/alumno', (request, response) => {
        response
            .status(200)
            .send('<h1>alumno roberto</h1>')
    })

    app.listen(3000)

    console.log('servidorsito')
}