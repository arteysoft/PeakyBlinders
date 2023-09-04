import 'dotenv/config'
import server from './appserver/server'
import { crearLog } from './peakybrokerdriver/logger'

let logger = crearLog('index.ts')

logger.info('Levantando broker')

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



