const http = require('http');

const port = 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  res.end('<h1>Hello from AWS EC2!</h1><p>CI/CD deployment works.</p>');
});

server.listen(port, '0.0.0.0', () => {
  console.log(`Server running on port ${port}`);
});