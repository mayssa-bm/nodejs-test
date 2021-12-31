var http = require('http');

var server = http.createServer(function(req,res){
 if(req.url == "/"){
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write('<html><head> Welcome to the Home Page </head></html>')
    res.end();
 }
 else if(req.url == "/about"){
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write('<html><head> This is the About Page </head></html>')
    res.end();
 }
 else if(req.url == "/contact"){
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write('<html><head> This is the Contact Page </head></html>')
    res.end();
 }
 else{
     res.end('Invalid request')
 }
})

server.listen(5000);
console.log("NodeJs sever is running on port 5000 ...")