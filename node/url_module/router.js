// will manage the routing of the application

// url core module provides utilities for URL resolution and parsing

const {URL} = require('url');

function route(req, res)
{
    // parse the request url
    const parsedUrl = new URL(req.url, `http://${req.headers.host}`);
    // first arg is the relative path, second arg is the base path

    // let's log the parsedUrl
    console.log(parsedUrl);

    // get the path
    const path = parsedUrl.pathname;

    if(path==="/")
    {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('Hello World');
    }
    else if(path==="/params")
    {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.write('Parameters passed are: \n');
        parsedUrl.searchParams.forEach((value, name) => {
            res.write(`${name}: ${value}\n`);
        });
        res.end();
    }
    else
    {
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.end('Page not found');
    }
}

module.exports = route;