const numerosPrimos = [2]

const esDivisible = (z, i) => z % i === 0

const verificarSiEsPrimo = (numeroVerificar, numeroPrimosAnteriores) => {
    if (numeroVerificar <= 1) {
        return [...numeroPrimosAnteriores]
    }

    for (let n of numeroPrimosAnteriores) {
        if (esDivisible(numeroVerificar, n)) {            
            return [...numeroPrimosAnteriores]
        };
    }
    return [...numeroPrimosAnteriores, numeroVerificar]
};

let resultado = verificarSiEsPrimo(3, [2])
console.log('Caso 1', resultado)
resultado = verificarSiEsPrimo(4, [3])
console.log('Caso 2',resultado, 'Aunque este mal planteado el esquema, la logica esta bien escrita')
resultado = verificarSiEsPrimo(4, [2, 3])
console.log('Caso 3',resultado)
resultado = verificarSiEsPrimo(5, [2, 3])
console.log('Caso 4',resultado)
resultado = verificarSiEsPrimo(6, [2, 3, 5])
console.log('Caso 5',resultado)
resultado = verificarSiEsPrimo(20, [11])
console.log('Caso 6',resultado, 'Aunque este mal planteado el esquema, la logica esta bien escrita')

let arrayOriginal = [2, 3, 5]
let arrResultado = verificarSiEsPrimo(6, arrayOriginal)

console.log('original')
console.log(arrayOriginal)
console.log('arrResultado')
console.log(arrResultado)


console.log('original')
arrayOriginal.push('hola')
console.log(arrayOriginal)
console.log('arrResultado')
arrResultado.push('chau')
console.log(arrResultado)

