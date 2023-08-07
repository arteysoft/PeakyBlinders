import mysql2prom, {Connection} from 'mysql2/promise'

export let insert = async (baseDeDatos, sql, arrayParm) => {
    let connection = await mysql2prom.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: baseDeDatos
    })
    
    await connection.query(sql, arrayParm)
    await connection.end()
}