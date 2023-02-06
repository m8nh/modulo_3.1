const mysql = require('mysql');
const http = require('http');
const url = require('url');
const qs = require('qs');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'minh1729',
    database: 'democ10',
    charset: 'utf8_general_ci',
});

connection.connect(function (err){
    if (err) {
        throw err.stack;
    }
    else {
        console.log("Connection successful");
    }
});

const server = http.createServer(async(req, res) => {
    try {
        if (req.url === "/user" && req.method   === "POST") {
            const buffers = [];
            for await (const chunk of req) {
                buffers.push(chunk);
            }
            const data = Buffer.concat(buffers).toString();
            const userData = JSON.parse(data);
            const sql =  `INSERT INTO teste (name, address) VALUES ('${userData.name}', '${userData.address}');`;
            connection.query(sql, (err, results, fields) =>{
                if (err) throw err;
                res.end("success");
            });
        }
    } catch (err) {
        return res.end (err.message);
    }
});

server.listen(8080, function() {
    console.log('server listening on port:8080');
});


