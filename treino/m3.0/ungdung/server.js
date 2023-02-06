const http = require('http');
const fs = require('fs');
const qs = require('qs');

let server = http.createServer(function(req, res) {
    if (req.method === 'GET') {
        fs.readFile('./views/index.html', function(err, data) {
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
            const number = qs.parse(data);
            fs.readFile('./views/index.html','utf-8', function(err, datahtml){
                if (err) {
                    console.log(err);
                }
                let a = parseInt(number.number);
                console.log(a);
                if (1<= a && a <=9){
                let datahtml = ''
                switch (a) {
                    case 1: datahtml =  datahtml.replace('{str}','One')      
                    break;
                    case 2:  datahtml =  datahtml.replace('{str}','Two')     
                     break;
                    case 3:   datahtml =  datahtml.replace ('{str}',"Three");   
                     break;
                    case 4:   datahtml +="Four";     
                    break;
                    case 5:   datahtml +="Five";    
                     break;
                    case 6:   datahtml +="Six";      
                    break;
                    case 7:   datahtml +="Seven";   
                     break;
                    case 8:   datahtml +="Eight";   
                     break;
                    case 9:   datahtml +="Nine";    
                     break;
                }
            }
            if (10 <= a && a <= 19){
                switch (a) {
                    case 10:  datahtml =  datahtml.replace('{str}','Ten')      
                    break;
                    case 11:  datahtml +="Eleven";    
                     break;
                    case 12:  datahtml +="Twelve";    
                     break;
                    case 13:  datahtml +="Thirteen";  
                     break;
                    case 14:  datahtml +="Fourteen"; 
                      break;
                    case 15:  datahtml +="Fifteen";   
                     break;
                    case 16:  datahtml +="Sixteen";   
                     break;
                    case 17:  datahtml +="Seventeen"; 
                     break;
                    case 18:  datahtml +="Eighteen";  
                     break;
                    case 19:  datahtml +="Nineteen";  
                     break;
                }
            }
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.write(datahtml);
                return res.end();
            });
        })
        req.on('error', () => {
            console.log('Error');
        })
    }
});

server.listen(8080, function () {
    console.log('server on 8080');
})