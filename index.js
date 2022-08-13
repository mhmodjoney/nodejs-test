const  http= require('http');
const  fs= require('fs');
const  path= require('path');

const server =  http.createServer((req,res)=>{

    if(req.url==='/'){
        res.writeHead(200,{'Content-Type':'text/html'})
        res.write('<h1> tssst <h1>');
        res.end();
    }
  else if(req.url==='/about'){
    fs.readFile(path.join(__dirname,'html','about.html'),
    (err, data)=>{
        if (err) throw err
        res.writeHead(200,{'Content-Type':'text/html'})
        res.end(data); 
    })
  }
    else if (req.url=== '/api/user')
    {
        const usres=[
            {names:'mj', age:77},
            {names:'mhmod',age:42}
        ]
        res.writeHead(200,{'Content-Type':'application/json'})
        res.end(JSON.stringify(usres))
    }
  
  
})

const  PORT= process.env.PORT || 5000
server.listen(PORT,()=>{console.log('server listen')})