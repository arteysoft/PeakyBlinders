import 'dotenv/config'
import server from './appserver/server'
import { crearLog } from './peakybrokerdriver/logger'

let logger = crearLog('index.ts')

logger.info('Levantando broker')

server()

