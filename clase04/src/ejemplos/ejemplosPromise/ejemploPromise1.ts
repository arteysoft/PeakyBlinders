export let ejemploPromise1 = () => {
    // Dado el infierno de callbacks
    // El problema de la iteracion
    // Algunos problemas mas que surgen basicamente porque algunas tareas pasan de ser
    // Sincronicas a asincronicas

    // Una solucion es las Promises 

    // La sintaxis de las promise es asi.

    let unaPromise = () => {
        return new Promise((resolve, reject) => {

        });
    }

    let laPromesa = unaPromise()
    console.log(laPromesa)

    laPromesa
    .then()
    .catch()
}