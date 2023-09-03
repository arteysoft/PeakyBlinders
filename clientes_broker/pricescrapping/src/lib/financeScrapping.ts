var fs = require('fs');
import {http, https} from 'follow-redirects'
const qs = require('querystring');

let filtrarPorClass = body => {
    let index = body.indexOf('YMlKec fxKbKc')
    let porcion1 = body.substring(index + 16, index + 21)    
    return porcion1
}

export let getQuoteGoogle = (informar) => {
    return new Promise((resolve, reject) => {
      var options = {
        'method': 'GET',
        'hostname': 'www.google.com',
        // 'path': '/finance/quote/YPF:NYSE',
        'path': '/finance/quote/CLV23:NYMEX',
        'headers': {
          'Content-Type': 'application/html'
        },
        'maxRedirects': 20
      };
      
      var req = https.request(options, (res) => {
        let chunks:Array<any> = [];
      
        res.on("data", (chunk) => {
          chunks.push(chunk);
        });
      
        res.on("end", function (chunk) {
          var body = Buffer.concat(chunks)
          let precio = filtrarPorClass(body.toString())          
          informar(precio)
        });
      
        res.on("error", function (error) {
          console.error(error);
          reject(error)
        });
      });
      
      req.end();
    })
}
