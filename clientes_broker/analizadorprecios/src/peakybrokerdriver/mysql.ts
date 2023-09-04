import mysql2prom, {Connection} from 'mysql2/promise'

let crearConexion = async () => {
    let connection = await mysql2prom.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: process.env.NOMBRE_BASE_DE_DATOS_SQL
    })

    return connection
}

export let insert = async (sql, arrayParm) => {
    let connection = await crearConexion()
    await connection.query(sql, arrayParm)
    await connection.end()
}

export let query = async (sql, arrayParm) => {
    let connection = await crearConexion()
    let respuesta = await connection.query(sql, arrayParm)
    await connection.end()
    return respuesta
}

export let queryNewMessage = async (id) => {
    let strQuery = "SELECT * FROM mensajes where destino = 'com.peakyblinders.evaluadorprecios' and id = ?"
    let respuesta = await query(strQuery, [id])
    return respuesta[0][0]
}

export let crearMensaje = () => {

}

export let cambiarStatus = async (id) => {
    try {
        let connection = await crearConexion()
        let sql = "UPDATE mensajes SET status = 1 where id = ? "
    
        await connection.query(sql, [id])
        await connection.end()
    }
    catch (err) {
        // loggear el error
        throw err
    }
}

export let guardarMensaje = async (objParams) => {
    let connection = await crearConexion()
    
    console.log(objParams)
    let sql = "INSERT INTO mensajes SET ? "
    objParams.payload = JSON.stringify(objParams.payload)
    console.log(objParams)
    await connection.query(sql, objParams)
    await connection.end()
}