"use strict";
let oStringOEntero;
let fn = (a) => {
    if (a instanceof String) {
        throw new Error('No se puede enviar un string');
    }
    return a + a + a;
};
console.log(fn(4));
