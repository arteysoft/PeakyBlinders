export let obtenerDiaHoy = () => {
    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');

    const formattedDate = `${year}-${month}-${day}`;
    return formattedDate
}

export let aguantar = (segundos) => {
    return new Promise((r) => {
        setTimeout(r, segundos * 1000)
    })
}

export let obtSegundosDesde1970 = () => Math.floor(new Date().getTime() / 1000)