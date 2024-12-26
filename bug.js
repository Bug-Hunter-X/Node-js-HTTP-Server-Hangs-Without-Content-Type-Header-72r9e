const http = require('http');

const server = http.createServer((req, res) => {
  // Without this line, the response will hang indefinitely
  // res.setHeader('Content-Type', 'text/plain');

  res.end('Hello, World!');
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});