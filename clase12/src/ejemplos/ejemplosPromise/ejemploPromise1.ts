export let ejemploPromise1 = () => {
    // Dado el infierno de callbacks
    // El problema de la iteracion
    // Algunos problemas mas que surgen basicamente porque algunas tareas pasan de ser
    // Sincronicas a asincronicas

    // Una solucion es las Promises 

    // La sintaxis de las promise es asi.

    let crearUnaPromise = (numero) => {
        return new Promise((resolve, reject) => {
            if (numero === 100) {
                reject(new Error('numero no puede ser 100'))
                return
            }
            setTimeout(() => {
                resolve(numero)
            }, 2000)
        });
    }

    let obtenerCuantoDeboSumar = () => {
        return 5
    }

    let laPromesa = crearUnaPromise(10)
    
    laPromesa
    .then(z => { 
        console.log(z) 
        return z
    })
    .then((z:any) => {
        return obtenerCuantoDeboSumar() + z
    })        
    .then(z => {
        console.log('El resultado total es: ', z)
    })
    .catch(err => console.log(err))
}