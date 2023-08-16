export let hacerLogin = (usuario, password, onFinish) => {
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

export let inventarAlumno = (token, onFinish) => {
    fetch('/alumno/inventar', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'x-token': token
        }
      })
        .then(response => { 
            console.log(response.status)
            return response.json()
        })
        .then(data => {
          onFinish(data)
        })
        .catch(error => {
          console.error('Error', error);
        });

}