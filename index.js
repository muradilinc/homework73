const express = require('express');
const app = express();
const port = 8000;

app.get('/:echo', (req, res) => {
  res.send(`${req.method} ${req.params.echo} log`);
});


const encryption = (text) => {
  const en = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  const square = [];
  const key = "password";
  let word = "";

  for (let i = 0; i < en.length; i++) {
    square[i] = en.slice(i).concat(en.slice(0, i));
  }

  for (let i = 0; i < text.length; i++) {
    word += square[en.indexOf(text[i].toUpperCase())][en.indexOf(key[i % key.length].toUpperCase())];
  }

  return word;
}


app.get('/encode/:word', (req, res) => {
  res.send(encryption(req.params.word));
});

app.listen(port, () => {
  console.log('port on ' + port);
});