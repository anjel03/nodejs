//console.log('Hello there,using node js');
let http=require("http");
http.createServer(function(req,res){
    res.writeHead(200,
        {
            'Content-type':'text/html'});
            res.end("Hello From my node server");
        }
).listen(8080);

//const http=require("http");