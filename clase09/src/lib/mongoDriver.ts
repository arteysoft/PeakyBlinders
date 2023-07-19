import {MongoClient} from 'mongodb'

const url = 'mongodb://0.0.0.0:27017'
const NOMBRE_BASE_DE_DATOS = 'peakyBlinders'
const CANTIDAD_LIMITE_OBJETOS_RESPUESTA = 1000

export let insertOne = async (nombreColeccion, documento) => {
    let cliente = await MongoClient.connect(url)
    let db = cliente.db(NOMBRE_BASE_DE_DATOS)
    let collection = db.collection(nombreColeccion)
    let metadata = await collection.insertOne(documento)
    await cliente.close()
    return metadata
}

export let query = async (coleccion, query) => {
    try {
        let cliente:MongoClient = await MongoClient.connect(url)
        let db = cliente.db(NOMBRE_BASE_DE_DATOS)
        let collection = db.collection(coleccion)
        let resultado = await collection.find(query, {projection: {_id:0}}).limit(CANTIDAD_LIMITE_OBJETOS_RESPUESTA).toArray()
        await cliente.close()
        return resultado
    }
    catch (err) {
        throw err
    }
}
