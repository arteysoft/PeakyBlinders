import log4js, {Configuration} from 'log4js'

let configuracionLogger:Configuration = {
    appenders: {
        archivo: {
            type: 'file',
            filename: '/var/peakybroker/logs/log.log',
            level: 'info'
        },
        consola: {
            type: 'stdout',
            level: 'error'
        },
        archivoErrores: {
            type: 'file',
            filename: '/var/peakybroker/logs/errores.log',
            level: 'error'
        }
    },
    categories: {
        default: {
            appenders: ['archivo', 'archivoErrores', 'consola'],
            level: 'info'
        }
    }
}

log4js.configure(configuracionLogger)

export let crearLog = nombre => log4js.getLogger(nombre)

