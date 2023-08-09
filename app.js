const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('hola, bienvenido al servidor usando Express');
});

app.get('/task', (req, res) => {
  res.send('esto va a devolver algo');
});

//esta no estoy muy segura de porque no me dio o como pude haberla corregido :c
app.post('/task/', (req, res) => {
  res.send('se agrego algo a la lista');
});

app.get('/image/:username', (req, res) => {
  const username = req.params.username;
  if (username === 'ronny') {
    res.sendFile('username.png', { root: __dirname });
  } else {
    res.status(404).send('ups, algo malo paso, trata de nuevo');
  }
});

app.use((req, res) => {
  res.status(404).send('ups, algo malo paso, vuelve a intentarlo');
});

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
