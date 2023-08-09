import {insert} from '../lib/mysql'
import {recorrerDirectorioConCallBack} from '../ejemplos/leerarchivos/leerTodosLosArchivos'

export let levantarArchivosAMySQL = async () => {

    recorrerDirectorioConCallBack(async (objUsuario) => {
        let tmplSQL = 'INSERT IGNORE INTO usuarios (id, firstName, lastName, city, streetName, country, accountName, account, amount) ' +
            'VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)'
        await insert('PeakyBlinders', tmplSQL, [
            objUsuario.id,
            objUsuario.firstName, 
            objUsuario.lastName,
            objUsuario.city,
            objUsuario.streetName,
            objUsuario.country,
            objUsuario.accountName,
            objUsuario.account,
            objUsuario.amount])
    })
}