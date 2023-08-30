const fs = require('fs');
import { unlink, readdir, readFile } from 'node:fs/promises';
const directorio = '/var/peakyblinders';

let crearPromise = () => {
    return new Promise((resolve) => {
        console.log('necesito descansar un rato')
        setTimeout(() => {
            resolve('parametro enviado por el resolve es decir todo ok el descanso')
        }, 2000)
    })
}

export default async () => {
    try {
        console.log('voy a borrar el 1er archivo')
        await unlink('/var/peakyblinders/fff517c4-60ef-4bf7-a657-26a38df41bd9.json')
        console.log('borre el 1do archivo')
        console.log('voy a borrar el 2do archivo')
        let resultadoDelThenAnterior = await crearPromise()
        console.log(resultadoDelThenAnterior)
        await unlink('/var/peakyblinders/7dddd743-2c0b-46d9-8cd9-8e6c7aaf0221.json')
        console.log('borre el 2do archivo')
    }
    catch (err) {
        console.log(err)
    }
}

export let mision1 = async () => {
    // 1) Leer toda la carpeta y mostrar por pantalla
    // 2) for de todo el array que me retorna y borrar cada uno de los archivos
    // 3) subir a mongodb cada uno de los archivos
    
    try {
        let resultado = await readdir(directorio)
        resultado = Array.from(resultado)
        for (let unArchivo of resultado) {
            let nombreCompleto = [directorio, unArchivo].join('/')
            console.log(nombreCompleto)
            await unlink(nombreCompleto)
            // Un ejercicio mas: hacer una promise que solo espere un segundo: await esperar()
        }
    } catch (error) {
        console.log(error)
    }
}

export let recorrerDirectorioConCallBack = async (enCadaContenidoCB) => {
    try {
        let resultado = await readdir(directorio)
        resultado = Array.from(resultado)
        for (let unArchivo of resultado) {
            let nombreCompleto = [directorio, unArchivo].join('/')
            let contenido = await readFile(nombreCompleto, 'utf-8')
            await enCadaContenidoCB(JSON.parse(contenido))
            await unlink(nombreCompleto)
            // Un ejercicio mas: hacer una promise que solo espere un segundo: await esperar()
        }
    } catch (error) {
        console.log(error)
    }
}

/*
Cuando nosotros tenemos una funcion la podemos invocar desde varios lugares y asi promover la 
reutilizacion (Eso lo tenemos claro todos)

Que pasa si la funcion, como en este caso, quiero que por cada archivo insertar en mongo
y en SQL. Como promuevo la reutilizacion.

YO NO QUIERO tener un recorrer archivos para mySQL y otro para mongo.
*/