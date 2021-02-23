const math = require('./math.js');
const http = require('http');

const sum = math.add(2,2);

const handleServer = function (req, res) {
  res.writeHead(200, { 'Content-Type' : 'text/html'});
  res.write('<h1>Hello world</h1>');
  res.write(`<p>The sum is: ${sum}</p>`);
  res.end();
}

const server = http.createServer(handleServer);


server.listen(3000, function() {
  console.log('Server on port 3000');
  console.log(`The sum is ${sum}`);
})