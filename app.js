const http = require ('http')

const nuevoServer = http.createServer((req, res) => {
  const url = req.url
  if (url === '/') {
    res.writeHead(200, {'Content-Type':'text/plain'})
    res.end ('Bienvenido a este nuevo sitio')
  } else if (url === '/about') {
    res.writeHead(200, {'Content-Type': 'text/plain'})
    res.end ('Esta es la pagina donde vas a saber mucho mas de nosotros')
  } else if (url === '/contact') {
    res.writeHead(200, {'Content-Type': 'text/plain'})
    res.end('contactanos a este correo: contact@example.com')
  } else {
    res.writeHead(404, {'Content-Type': 'text/plain'})
    res.end('Pagina no encontrada, tratalo con "/contact", "/about"')
  }
})
  
const port = 3000;

nuevoServer.listen(port, () =>{
  console.log(`http://localhost:${PORT}/ aqui corre el servidor`);
})
