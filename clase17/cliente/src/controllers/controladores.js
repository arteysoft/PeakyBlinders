import {hacerLogin, inventarAlumno, inventarAlumnoAsync} from '../apiproxy/proxy'

/*
Estrategia de react. Nunca pero nunca va a leer al DOM
*/
let usuarioActualizado = ''
let passwordActualizada = ''

let initControllers = () => {
    /*
    document.getElementById('txtUsuario').addEventListener('keyup', e => {
        usuarioActualizado = e.target.value
        console.log(usuarioActualizado)
    })
    document.getElementById('txtPassword').addEventListener('keyup', e => {
        passwordActualizada = e.target.value
        console.log(passwordActualizada)
    })
    */

    document.addEventListener('keyup', e => {
        switch (e.target.id) {
            case 'txtUsuario':
                usuarioActualizado = e.target.value
                break
            case 'txtPassword':
                passwordActualizada = e.target.value
                break
        }
    })

    document.getElementById('frmLogin').addEventListener('submit', e => {
        e.preventDefault()
        hacerLogin(usuarioActualizado, passwordActualizada, (data) => {
            console.log(data)
            localStorage.setItem('token', data.token)
        })
    })

    document.getElementById('btnVerAlumno').addEventListener('click', async e => {
        let arrAlu = []
        for (let idx = 0; idx < 10; idx++) {
            let nuevoAlu = await inventarAlumnoAsync()
            arrAlu.push(nuevoAlu)            
        }
        console.log(arrAlu)

        // 1) Levantar el template de la tabla de alumnos en una variable
        // 2) Utilizar mustache para renderizar la tabla de alumnos
        // 3) Insertar en display el resultado de aver renderizado con Mustache.

        let txtOutput = Mustache.render('{{#rep}}<h1>{{x}}</h1>{{/rep}}', {rep: [{x:1}, {x:2}, {x:3}, {x:4}]})
        document.getElementById('display').innerHTML = txtOutput;
    })
}

/*
Para clase 16:

Traerme varios alumnos, 10 ? 
Hacer una tabla y mostrarla en el DOM.
Para esto, vamos a utilizar un motor de Renderizado (agarra un template y lo intercala con datos que yo tengo en memoria)

*/



export default initControllers