const numerosPrimos = [2];

const esDivisible = (z, i) => z % i === 0

const calcularNumeros = (numero) => {
    if (numero <= 1) {
        return
    }

    for (let divisor of numerosPrimos) {
        if (esDivisible(numero, divisor)) {
            return
        };
    }
    numerosPrimos.push(numero);
};

for(let i = 3; i <= 100; i++){
    calcularNumeros(i);
}

console.log(numerosPrimos);

