const http= require('http');
const fs = require('fs');

const server =http.createServer((req,res)=>{
    console.log(req.url, req.method);

    res.setHeader('Content-Type','text/html');

    let path= './views/';
    switch(req.url){
        case '/':
            path +='Login.html';
            res.statusCode=200;
            break;
        case '/Login.html' :
            path +='Login.html';
            res.statusCode=200;
            break;
        case '/Game.html':
            path +='Game.html';
            res.statusCode=200;
            break;
        case '/Profile.html':
            path +='Profile.html';
            res.statusCode=200;
            break;
        case '/Shop.html':
            path +='Shop.html';
            res.statusCode=200;
            break;
        default:
            path += '404.html';
            res.statusCode=404;
            break;
    }

    fs.readFile(path,(err,data)=>{
        if(err){
            console.log(err);
        }else{
            res.end(data);
        }
    })


});

server.listen(3000,'localhost',()=>{
    console.log('listening for requests on port 3000')
})