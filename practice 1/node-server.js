// Import library http
 
const http = require("http");
 
// Creating Server
 
console.log("Hello world 1"); 
 
 
http.createServer((req, res)=>{
    res.end("Welcome to NodeJS server");
    console.log("Hello world 2");

}).listen(4120);
 
 
console.log("Hello world 3");
 
 

 
 
