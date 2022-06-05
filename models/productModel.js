var products=[]
const {writeDataToFile}=require('../utils')

const {Client}= require('pg')

const client = new Client({
    host: "localhost",
    user: "postgres",
    port: 5432,
    password :'postgres',
    database :'postgres'
})

client.connect();

client.query(`SELECT * FROM products`,(err,res)=>{
    if(!err){
        fetchQuery(res.rows)
    }else{
        console.log(err.message);
    }
    client.end;
})
function fetchQuery(value){
    products=value
}
function findAll() {
    return new Promise((resolve,reject)=>{
        resolve(products)
    })
}
function findById(id) {
    return new Promise((resolve,reject)=>{
        const product=products.find((p)=>p.id==id)
        resolve(product)
    })
}
function create(product) {
    return new Promise((resolve,reject)=>{
        client.query(`INSERT INTO products( title,description, price) VALUES($1,$2,$3)`,[product.title,product.description,product.price])
            .then(() => resolve({message: 'Insert successfull'}))
            .catch((e) => reject(e))

    })
}
function update(id,product) {
    return new Promise((resolve,reject)=>{
        client.query(`UPDATE products SET title=$1,description=$2, price=$3 WHERE $4=id`,[product.title,product.description,product.price,id])
            .then(() => resolve({message: 'Update successfull'}))
            .catch((e) => reject(e))
    })
}
function remove(id) {
    return new Promise((resolve,reject)=>{
        client.query(`DELETE FROM products  WHERE $1=id`,[id])
            .then(() => resolve())
            .catch((e) => reject(e))
    })
}
module.exports= {
    findAll,
    findById,
    create,
    update,
    remove
}
