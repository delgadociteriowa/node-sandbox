const express = require('express');

const server = express();

server.get('/', (req, res) => {
  res.send('<h1>Hello world express</h1>');
})

server.listen(3000, function () {
  console.log('Server on port 3000');
})