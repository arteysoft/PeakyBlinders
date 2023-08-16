import {hacerLogin, inventarAlumno} from '../apiproxy/proxy'

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

    document.getElementById('btnVerAlumno').addEventListener('click', e => {
        let token = localStorage.getItem('token')
        alert([usuarioActualizado, passwordActualizada])
        inventarAlumno(token, (data) => {
            console.log(data)
        })
    })
}

/*
Para clase 16:

Traerme varios alumnos, 10 ? 
Hacer una tabla y mostrarla en el DOM.
Para esto, vamos a utilizar un motor de Renderizado (agarra un template y lo intercala con datos que yo tengo en memoria)

*/



export default initControllers