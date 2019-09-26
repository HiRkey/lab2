'use strict';
var http = require('http');
var url = require('url');
var port = process.env.PORT || 1337;

http.createServer(function (req, res) {
   
    var query = url.parse(req.url, true).query;

    
    var method = query.method;
    var x = query.x;
    var y = query.y;
    var result;

    if (method == 'add') {
        result = +x + +y;
        console.log('x + y = ' + result);
    }
    else if (method == 'subtract') {
        result = +x - +y;
        console.log('x - y = ' + result);
    }
    else if (method == 'multiply') {
        result = +x * +y;
        console.log('x * y = ' + result);
    }
    else if (method == 'divide') {
        result = +x / +y;
        console.log('x / y = ' + result);
    }
    else {
        console.log('error: that operation has not been implemented');
        result = 'That is not a valid operation {add, subtract, multiply, divide}';

    }

//output to the browser
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    
    res.write(x + " " + method + " " + y + ' = ' + result); 
    res.end();  
    
}).listen(port);
