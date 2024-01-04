const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});

  res.end('Hello World\n');
});

const port = 3080;
server.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}/`);
});
