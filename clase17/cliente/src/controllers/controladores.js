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
        await mostrarAlumnos()        
    })
}

export default initControllers

export let mostrarAlumnos = async (data) => {
    let arrAlu = []
    for (let idx = 0; idx < 10; idx++) {
        let nuevoAlu = await inventarAlumnoAsync()
        arrAlu.push(nuevoAlu)            
    }
    console.log(arrAlu)

    let template = document.getElementById("tmplTabAlumno").innerHTML
    let txtOutPut = Mustache.render(template, {rep: arrAlu})
    document.getElementById('display').innerHTML = txtOutPut;
}