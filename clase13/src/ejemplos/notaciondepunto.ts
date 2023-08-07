class MiClase {
    primerMetodo():MiClase {
        console.log('primer metodo')
        return this
    }
    segundoMetodo():MiClase {
        console.log('segundo metodo')
        return this
    }
    tercerMetodo():MiClase {
        console.log('segundo metodo')
        return this
    }
    resumir():void {
        console.log('ahora todo configurado, le doy arranque')
    }
}

export default() => {
    let miobjeto = new MiClase()

    miobjeto
    .primerMetodo()
    .tercerMetodo()
    .primerMetodo()
    .primerMetodo()
    .tercerMetodo()
    .resumir()

    new MiClase()
    .primerMetodo()
    .tercerMetodo()
    .primerMetodo()
    .segundoMetodo()
    .resumir()

    miobjeto.primerMetodo()

    miobjeto.segundoMetodo()

    miobjeto.tercerMetodo()

}



