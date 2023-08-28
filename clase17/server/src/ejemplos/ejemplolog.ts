import {crearLog} from "../lib/logger"

let logger = crearLog('ejemplos/ejemplo.ts')


let fnRecursiva = () => {
    logger.trace("Este es el nivel de trace")
    logger.debug("Some debug messages")
    logger.info("Este de de info")
    logger.warn("Este de warning")
    logger.error("Este es un mensaje de error")

    setTimeout(fnRecursiva, 1000)
}

export default () => {
    fnRecursiva()
}

