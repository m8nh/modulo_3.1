const http = require('http');
const fs = require('fs');
const url = require('url');

const server = http.createServer((req, res) => {
    let urlParse = url.parse(req.url, true);
    let parthName = urlParse.pathname  // vs: / home
    let trimPath = parthName.replace(/^\/+|\/+$/g, '');
    let chosenHandler;
    if (typeof router[trimPath] === "undefined") {
        chosenHandler = handler.notFound
    } else {
        chosenHandler = router[trimPath];
    }
    chosenHandler(req, res);
});


let handler = {};
handler.login = function(req, res){

}
handler.home = function(req, res){
    fs.readFile('./views/index.html', 'utf-8', (err, data) => {
        res.writeHead(200,"text/html");
        res.write(data);
        res.end();
    })
};

handler.notFound = function(req, res) {
    fs.readFile('./views/notFound.html', 'utf-8', (err, data) => {
        res.writeHead(200,"text/html");
        res.write(data);
        res.end();
    })
}

let router = {
    "home": handler.home,
    "login": handler.login
}
server.listen(8080, function() {
    console.log('listening on port 8080');
});