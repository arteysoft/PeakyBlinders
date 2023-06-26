let m6 = (x) => {
    console.log(['estoy en m6', x])
    setTimeout(() => {
        console.log('Ahora se ejecuta el callback que esta dentro de m6')
    }, 0)
}

let m5 = (x) => {
    console.log('Antes de llamar a m6')
    m6(x + 1)
    console.log('Luego de llamar a m6')
}

let m4 = (x) => {
    console.log('Antes de llamar a m5')
    m5(x + 1)
    console.log('Luego de llamar a m5')
}

let m3 = (x) => {
    console.log('Antes de llamar a m4')
    m4(x + 1)
    console.log('Luego de llamar a m4')
}

let m2 = (x) => {
    console.log('Antes de llamar a m3')
    m3(x + 1)
    console.log('Luego de llamar a m3')
}

let m1 = (x) => {
    console.log('Antes de llamar a m2')
    m2(x + 1)    
    console.log('Luego de llamar a m2')

}

m1(1000)
for (;;) {}
