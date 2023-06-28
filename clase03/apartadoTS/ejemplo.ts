let oStringOEntero:String|number

let fn = (a:String|number):number => {
    if (a instanceof String) {
        throw new Error('No se puede enviar un string')
    }
    return a + a + a
}

console.log(fn(4))

