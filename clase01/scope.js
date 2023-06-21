/*
El scope es el ambito de programacion donde "vive" un identificador
El scope esta tipicamente demarcado con {} llaves
*/

{
    let x = 'equis'    
    {
        let y = 'y griega'
    }
    // console.log(y)
}

// console.log(x)

/*
la keyword var es para definir un identificador pero su scope es en la funcion donde fue definido.
*/

function hola() {
    {
        var x = 'hola'
    }
    console.log(x)
}

hola()