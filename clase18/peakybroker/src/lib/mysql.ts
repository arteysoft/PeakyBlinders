import mysql2prom, {Connection} from 'mysql2/promise'

export let guardarMensaje = async (objParams) => {
    let connection = await mysql2prom.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: process.env.NOMBRE_BASE_DE_DATOS_SQL
    })
    
    console.log(objParams)
    let sql = "INSERT INTO mensajes SET ? "
    objParams.payload = JSON.stringify(objParams.payload)
    console.log(objParams)
    await connection.query(sql, objParams)
    await connection.end()
}