const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

// "database"

const greetings = [
  {},
  {
      label: "Hello, world!"
  }
];

const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(greetings[1]));
});

const server = module.exports = app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
