import {http} from 'follow-redirects'

export let enviarMensaje = async (mensaje) => {
    console.log('por enviar mensaje', mensaje)
    return await postRequestPromise('/enviarmensaje', mensaje)  
}

export let postRequestPromise = (url, postData) => {
  return new Promise((resolve, reject) => {
    var options = {
      'method': 'POST',
      'hostname': 'localhost',
      'port': 11000,
      'path': url,
      'headers': {
        'Content-Type': 'application/json'
      },
      'maxRedirects': 20
    };
    
    var req = http.request(options, (res) => {
      let chunks:Array<any> = [];
    
      res.on("data", (chunk) => {
        chunks.push(chunk);
      });
    
      res.on("end", function (chunk) {
        var body = Buffer.concat(chunks)
        resolve(body.toString())
      });
    
      res.on("error", function (error) {
        reject(error);
      });
    });
    
    req.write(postData);
    req.end();
  }) 
}

