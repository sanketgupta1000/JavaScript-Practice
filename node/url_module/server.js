const http = require('http');

const route = require('./router');

const server = http.createServer((req, res) => {
    route(req, res);
});

server.listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
});