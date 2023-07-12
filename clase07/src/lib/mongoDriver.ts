import {MongoClient} from 'mongodb'

const url = 'mongodb://0.0.0.0:27017'
const NOMBRE_BASE_DE_DATOS = 'peakyBlinders'

export let insertOne = async (nombreColeccion, documento) => {
    let cliente = await MongoClient.connect(url)
    let db = cliente.db(NOMBRE_BASE_DE_DATOS)
    let collection = db.collection(nombreColeccion)
    let metadata = await collection.insertOne(documento)
    await cliente.close()
    return metadata
}