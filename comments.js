// Create web server
// Create a web server that can listen to incoming requests on port 3000.
// The server should respond with a file containing an array of comments. The comments can be hardcoded in a file called comments.js.

// The server should listen on the path /comments and return the comments file.
// The server should listen on the path /ping and return a response with the text "pong".
// The server should listen on the path /status and return a response with the text "OK".
const http = require('http');
const fs = require('fs');
const url = require('url');

const comments = require('./comments');

const server = http.createServer((req, res) => {
  const urlPath = url.parse(req.url).pathname;
  switch (urlPath) {
    case '/comments':
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify(comments));
      break;
    case '/ping':
      res.setHeader('Content-Type', 'text/plain');
      res.end('pong');
      break;
    case '/status':
      res.setHeader('Content-Type', 'text/plain');
      res.end('OK');
      break;
    default:
      res.statusCode = 404;
      res.end();
      break;
  }
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});
// Run the server and verify that it works as expected. You can use curl or a web browser to test the server.

// curl http://localhost:3000/comments
// curl http://localhost:3000/ping
// curl http://localhost:3000/status
// The comments file should contain an array of comments.

// [
//   {
//     "id": 1,
//     "name": "John Doe",
//     "email": "