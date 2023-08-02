import {insert} from '../lib/mysql'

/// NO OLVIDAR DE VER COMO SE DEFINE UN TYPE FUNCTION

let esPar = n => n % 2 === 0
let esImpar = n => !esPar(n)
let aplicarCollatz = n => (3 * n) + 1
let mitad = n => n / 2
let diferentes = (n, m) => n !== m

let contarCiclos = numero => {
    let numerosIterados = 0

    while (diferentes(numero, 1)) {
        if (esPar(numero)) {
            numero = mitad(numero)
        } else{
            numero = aplicarCollatz(numero)
        }
        numerosIterados++
    }
    return numerosIterados
}

let esperar = () => {
    return new Promise(resolve => {
        setTimeout(() => { 
            resolve('NO IMPORTA')
        }, 1)
    })
}

let insertSQL = async (valores) => {
    let tmplSQL = 'INSERT IGNORE INTO collatz (numero, ciclos, mayor_ciclo) VALUES (?, ?, ?)'
    insert('PeakyBlinders', tmplSQL, [valores.numero, valores.ciclos, valores.mayorCiclo])
}

export let conjeturaDeCollatz = async () => { 
    let mayorCiclo = 1
    for (let n = 1; n < 500000; n++) {
        let ciclos = contarCiclos(n)
        if (ciclos > mayorCiclo) {
            mayorCiclo = ciclos
        }
        console.log([n, ciclos, mayorCiclo])        
        await insertSQL({
            numero: n,
            ciclos,
            mayorCiclo
        })
        await esperar()
    }
}

/*
Vamos a aparear un numero con la cantidad de iteraciones para su resolucion
y esto lo vamos a meter en un MySQL
*/
