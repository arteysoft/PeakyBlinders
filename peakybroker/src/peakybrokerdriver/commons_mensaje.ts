import {v4 as uuid} from 'uuid'

export let obtSegundosDesde1970 = () => Math.floor(new Date().getTime() / 1000)

export interface Mensaje {
    id : string,
    ts: number,
    origen: string,
    destino: string,
    payload: Object
 }

export let crearMensaje = (origen, destino, payload) => {
    let mensaje:Mensaje = {
        id: uuid(),
        ts: obtSegundosDesde1970(),
        origen,
        destino,
        payload
    }

    return mensaje
}