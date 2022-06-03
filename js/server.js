const http = require('http')
const { getProducts , getProduct,createProduct,updateProduct,deleteProduct }=require('../controllers/productController')

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
        res.writeHead(200,{'Content-Type':'application/json'})
        res.end(JSON.stringify({ message : 'RouteNotFound'}))
    }

})

const PORT = process.env.PORT || 5000

server.listen(PORT,()=>console.log(`Server running on port ${PORT}`))
