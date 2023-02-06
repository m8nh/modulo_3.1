const http = require('http');
const fs = require('fs');
const qs = require('qs');

const server = http.createServer(function(req, res){
    if (req.method === 'GET') {
        fs.readFile('./views/calculator.html', function(err,data) {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            return res.end();
        });
    } else {
        let data = '';
        req.on('data', chunk => {
            data += chunk;
        })
        req.on('end', () => {
            const calculator = qs.parse(data);
            fs.readFile('./views/calculator.html', 'utf-8', function (err, datahtml) {
                if (err) {
                    console.log(err);
                }
                switch (calculator.cal){
                    case '*':
                        datahtml = datahtml.replace('{result}', (calculator.a * calculator.b));
                        break;
                    case '/':
                        datahtml = datahtml.replace('{result}', (calculator.a / calculator.b));
                        break;
                    case '+':
                        datahtml = datahtml.replace('{result}', (calculator.a + calculator.b));
                        break;
                    case '-':
                        datahtml = datahtml.replace('{result}', (calculator.a - calculator.b));
                        break;
                }
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.write(datahtml);
                return res.end();
            });
        })
        req.on('error', () => {
            console.log('error')
        })
    }
});

server.listen(8080, function(){
    console.log('listening on port 8080');
});