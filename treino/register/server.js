const http = require('http');
const fs = require('fs');
const qs = require('qs');

const server = http.createServer(function(req, res) {
    if (req.method === 'GET') {
        fs.readFile('./views/register.html','utf-8', function(err,data){
            res.writeHead(200, {'Content-Type':'text/html'});
            res.write(data);
            return res.end();
        });
    } else {
        let data = '';
        req.on('data', chunk => {
            data += chunk;
        })
        req.on('end', () => {
            const userInfo = qs.parse(data);
            fs.readFile('./views/info.html', 'utf-8', function (err, datahtml) {
                if (err) {
                    console.log(err);
                }
                datahtml = datahtml.replace('{name}', userInfo.name);
                datahtml = datahtml.replace('{email}', userInfo.email);
                datahtml = datahtml.replace('{password}', userInfo.password);
                res.writeHead(200, {'Content-type': 'text/html'});
                res.write(datahtml);
                return res.end();
        });
    })
    req.on('error', () => {
        console.log('Error');
    });
    }
});

server.listen(8080, function(){
    console.log('listening on port 8080')
});