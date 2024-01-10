const express = require('express');
const app = express();
const port = 8000;

app.get('/:echo', (req, res) => {
  res.send(`${req.method} ${req.params.echo} log`);
});

app.listen(port, () => {
  console.log('port on ' + port);
});