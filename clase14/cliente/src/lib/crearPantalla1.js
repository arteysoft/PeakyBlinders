export default () => {
    console.log('desde la lib 1')

    document.getElementById('frmLogin').addEventListener('submit', e => {
        alert('hola mundo!!!')
        alert('chau mundo!!!')
        e.preventDefault();
    })
}