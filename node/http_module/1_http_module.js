// we are learning node to be able to write server side logic

// now, in vanilla node, we simply have the tools to create a server, handle requests, and send responses

// we can use the http module to create a server

const http = require('http');

const server = http.createServer((req, res) => {

    // every time a request is made, this callback function is called

    // check the request url

    if(req.url==='/')
    {
        // set the response header
        res.writeHead(200, {'Content-Type': 'text/html'});
        // send the response
        res.end('<h1>Welcome to the home page</h1>');
    }
    else if(req.url==='/about')
    {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end('<h1>Welcome to the about page</h1>');
    }
    else
    {
        res.writeHead(404, {'Content-Type': 'text/html'});
        res.end('<h1>Page not found</h1>');
    }

});

// now, we need to listen to the requests
server.listen(8080, ()=>{
    console.log('Server is listening on port 8080');
})