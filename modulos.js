const fs = require('fs');

function transferir(documento, destino) {
  fs.readFile(documento, 'utf-8', (err, data) =>{
    if (err) {
      console.error('ups, algo no se leyo', err);
    return
    }
    fs.writeFile(destino, data, 'utf-8', err =>{
      if (err) {
        console.error('ups, no se escribio');
      return
      }
      console.log('Se pudo copiar lo ingresado');
    });
  });
};

module.exports ={
  transferir
}