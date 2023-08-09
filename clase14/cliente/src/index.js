import crearPantalla1 from "./lib/crearPantalla1";

let hwrecursivo = () => {
    console.log("hello world!");
    console.log(new Date())
    setTimeout(hwrecursivo, 2000)
    console.log('------------------------------------')
}

hwrecursivo()
crearPantalla1()
