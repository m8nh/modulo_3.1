const http = require('http');
const fs = require('fs');
const qs = require('qs');

const server = http.createServer(function(req, res){
    if (req.method === 'GET') {
        fs.readFile('./views/todo.html', 'utf8', function(err,data){
            res.writeHeader(200, {'Content-Type': 'text/html'});
            res.write(data);
            return res.end();
        })
    } else {
        let data = '';
        req.on('data', chunk => {
            data += chunk;
        })
        req.on('end',() => {
            const toDolist = qs.parse(data);
            fs.readFile('./views/display.html', 'utf8', function(err,datahtml){
                if (err) {
                    console.log(err);
                }
                datahtml = datahtml.replace('{list}', toDolist.toDoList);
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.write(datahtml);
                return res.end();
            })
        })
        req.on('error', () => {
            console.log('error');
        })
    }
});

server.listen(8080, function () {
    console.log('localhost:8080');
})