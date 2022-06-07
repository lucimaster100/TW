const http = require('http')
const { getProducts , getProduct,createProduct,updateProduct,deleteProduct }=require('../controllers/productController')
const url = require('url')
const fs =require('fs')
const lookup = require('mime-types').lookup

const server= http.createServer((req,res)=>{
    if(req.url=='/products'&& req.method=='GET'){
        getProducts(req,res)
    }else if(req.url.match(/\/products\/([0-9]+)/) && req.method=='GET') {
        const id=req.url.split('/')[2]
        getProduct(req,res,id)
    }else if(req.url=='/products'&& req.method=='POST'){
        createProduct(req,res)
    }else if(req.url.match(/\/products\/([0-9]+)/) && req.method=='PUT') {
        const id=req.url.split('/')[2]
        updateProduct(req,res,id)
    }else if(req.url.match(/\/products\/([0-9]+)/) && req.method=='DELETE') {
        const id=req.url.split('/')[2]
        deleteProduct(req,res,id)
    }else{
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
                let mime=lookup(path)
                res.writeHead(200,{'Content-Type': mime})
                res.write(content)
                res.end()
            }

        })

    }

})

const PORT = process.env.PORT || 5000

server.listen(PORT,()=>console.log(`Server running on port ${PORT}`))
