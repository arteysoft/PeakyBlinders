import 'dotenv/config'
import server from './appserver/server'
import { crearLog } from './peakybrokerdriver/logger'

let logger = crearLog('index.ts')

logger.info('Levantando analizador de precios')
logger.info('port: ' + process.env.PORT)

global.mapaMircoservicios = {}

global.mapaMircoservicios['com.peakyblinders.financescrapping'] = {
    host: 'localhost',
    port: 11101
}

global.mapaMircoservicios['com.peakyblinders.evaluadorprecios'] = {
    host: 'localhost',
    port: 11100
}

server()
