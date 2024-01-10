const express = require('express');
const app = express();
const port = 8000;

app.get('/:echo', (req, res) => {
  res.send(`${req.method} ${req.params.echo} log`);
});

const en = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const square = [];
const key = "password";

for (let i = 0; i < en.length; i++) {
  square[i] = en.slice(i).concat(en.slice(0, i));
}


const encryption = (text) => {
  let word = "";

  for (let i = 0; i < text.length; i++) {
    word += square[en.indexOf(text[i].toUpperCase())][en.indexOf(key[i % key.length].toUpperCase())];
  }

  return word;
}

app.get('/encode/:word', (req, res) => {
  res.send(encryption(req.params.word));
});

const decryption = (text) => {
  let word = "";

  for (let i = 0; i < text.length; i++) {
    const row = en.indexOf(key[i % key.length].toUpperCase());
    const coll = square[row].indexOf(text[i].toUpperCase());
    word += en[coll];
  }

  return word;
}

app.get('/decode/:word', (req, res) => {
  res.send(decryption(req.params.word));
})

app.listen(port, () => {
  console.log('port on ' + port);
});