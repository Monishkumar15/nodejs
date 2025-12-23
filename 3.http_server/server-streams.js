const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    if (req.url === '/' && req.method=="GET") {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end('Home Page');
    } else if (req.url === '/about') {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end('About Page');
    } else if (req.url === '/file') {
       const readStream = fs.createReadStream("./sample.mp4")
      res.writeHead(200, { 'Content-Type': 'video/mp4' });
    //   res.end('video Page');
    readStream.pipe(res);
    } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Route not found');
  }
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});
