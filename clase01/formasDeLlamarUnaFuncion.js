function suma(x, y) {
    return x + y
}

// primera forma de llamar una funcion

let resultado = suma(3, 5)

resultado = suma.call(null, 7, 8)
resultado = suma.apply(null, [9, 8])
resultado = suma.bind(null, 10, 20)

console.log(resultado)