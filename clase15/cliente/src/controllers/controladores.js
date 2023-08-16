let hacerLogin = (usuario, password, onFinish) => {
    const postData = {
        usuario,
        password
      }
      
      fetch('/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(postData)
      })
        .then(response => response.json())
        .then(data => {
          console.log('Post created:', data);
          onFinish(data)
        })
        .catch(error => {
          console.error('Error creating post:', error);
        });
      
}

let initControllers = () => {
    document.getElementById('frmLogin').addEventListener('submit', e => {
        e.preventDefault()
        let usuario = document.getElementById('txtUsuario').value
        let password = document.getElementById('txtPassword').value
        hacerLogin(usuario, password, (data) => {
            console.log(data)
            localStorage.setItem('token', data.token)
        })
    })
}


export default initControllers