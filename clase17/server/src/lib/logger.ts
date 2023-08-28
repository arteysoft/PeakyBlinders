import log4js, {Configuration} from 'log4js'

let configuracionLogger:Configuration = {
    appenders: {
        archivo: {
            type: 'file',
            filename: '/var/peakyblinders/logs/log.log',
            level: 'info'
        },
        consola: {
            type: 'stdout',
            level: 'error'
        },
        archivoErrores: {
            type: 'file',
            filename: '/var/peakyblinders/logs/errores.log',
            level: 'error'
        }
    },
    categories: {
        default: {
            appenders: ['archivo', 'archivoErrores', 'consola'],
            level: 'info'
        }
        /*
        otraCategoria: {
            appenders: ['archivoErrores'],
            level: 'error'
        },
        otraMas: {
            appenders: ['consola'],
            level: 'error'
        }
        */
    }
}

log4js.configure(configuracionLogger)

export let crearLog = nombre => log4js.getLogger(nombre)

