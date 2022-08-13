const  http= require('http');

const server =  http.createServer((req,res)=>{
    if(req.url==='/'){
        res.write('<h1> tssst <h1>');
        res.writeHead(200,{'Content-Type':'text/html'})
        res.end();    
    }
  else if(req.url==='/about'){
    res.write('<h1> about <h1>');
    res.writeHead(200,{'Content-Type':'text/html'})
    res.end();   
  }
});

const   PORT= process.env.PORT || 5000
server.listen(5000,()=>{console.log('server listen')});