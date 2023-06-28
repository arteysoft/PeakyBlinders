import { Usuario } from './interfaces/Usuario'
import genUsuario from './lib/genusuario'

// setTimeout(() => {}, 1000000)

let z = genUsuario()
z = genUsuario()
z = genUsuario()
z = genUsuario()

console.log(z)

/*
Tarea:

facil: Generar un archivo en formato json con un usuario puntual
dificil: Generar 10/10000 archivos con diferentes usuarios

los archivos se generan en /var/peakyblinders/f7a4d617-99cc-470e-8ef8-dd6323854e3c.json

*/