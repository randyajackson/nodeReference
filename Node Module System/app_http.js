const http = require('http');

//const server = http.createServer();
//this server is an event emitter
//server.on
//server.emit

//this code lets you know a connection is being made
// server.on('connection', (socket) => {
//     console.log('new connection');
// });

//instead of working with a socket, we are working with a request and the repsonse objects
const server = http.createServer((req, res) => {
    if (req.url === '/'){
        res.write('Hello');
        res.end();
    }

    if (req.url === '/api/courses'){
        res.write(JSON.stringify([1,2,3]));
        res.end();
    }
});

//not using http module to make a backend.
//use a framework called express
//built on top of HTTP module

server.listen(3000);

console.log('listening on port 3000');
