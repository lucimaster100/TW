const http = require('http')
const url = require('url')
const fs =require('fs')
const lookup = require('mime-types').lookup
const port = 3000

const server = http.createServer(function (req,res){
    let parsedURL=url.parse(req.url,true)
    let path=parsedURL.path.replace(/^\/+|\/+$/g,"")
    if(path== ""){
        path="Home.html"
    }
    let file= "./Views/" +path
    res.writeHead(200, {'Content-Type':'text/html'})
    fs.readFile(file,function (error,content){
        if(error){
            res.writeHead(404)
            res.write('File not found')
            res.end()
        }else {
            console.log(file)

            let mime=lookup(path)
            res.writeHead(200,{'Content-Type': mime})
            res.write(content)
            res.end()
        }

    })
})

server.listen(port,function(error){
    if(error){
        console.log("Something went wrong",error)
    }else{
        console.log("Server is listening on port " + port)
    }
})
