const http = require('http');
const url = require('url');
const fs = require('fs');


let server = http.createServer(function(req, res) {
    // get url and parse
    let parseUrl = url.parse(req.url, true);
    // get the path
    let path = parseUrl.pathname;
    let trimPath = path.replace(/^\/+|\/+$/g, '');

    let chosenhandler = (typeof (router[trimPath]) !== 'undefined') ? router[trimPath]: handlers.notFound;
    chosenhandler(req, res);
});

server.listen(8080, function () {
    console.log('listening on port 8080');
});

let handlers = {};
handlers.products = function (req, res){
    fs.readFile('./views/products.html', function (err,data){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
    });
};

handlers.users = function (req, res){
    fs.readFile('./views/users.html', function (err,data){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
    });
};

handlers.notFound = function (req, res){
    fs.readFile('./views/notfounds.html', function (err,data){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
    });
};

// definer the request router
let router = {
    'users': handlers.users,
    'products': handlers.products
}