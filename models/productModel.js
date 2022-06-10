var products = []
var product=[]

const { Client } = require('pg')

const client = new Client({
    host: "localhost",
    user: "postgres",
    port: 5432,
    password: 'postgres',
    database: 'postgres'
})

client.connect();

function findAllProducts() {
    return new Promise((resolve, reject) => {
        client.query(`SELECT * FROM products`, (err, res) => {
            if (!err) {
                resolve(res.rows)
            } else {
                console.log(err.message);
                reject(err)
            }
            client.end;
        })
    })
}
function findByType(param) {
    return new Promise((resolve, reject) => {
        client.query(`SELECT * FROM products WHERE type = $1 `, [param], (err, res) => {
            if (!err) {
                resolve(res.rows)
            } else {
                console.log(err.message);
                reject(err)
            }
            client.end;
        })
    })
}

function findByPrice(param) {
    return new Promise((resolve, reject) => {
        client.query(`SELECT * FROM products WHERE price = $1 `, [param], (err, res) => {
            if (!err) {
                resolve(res.rows)
            } else {
                console.log(err.message);
                reject(err)
            }
            client.end;
        })
        resolve(products)
    })
}
function findByOrigin(param) {
    return new Promise((resolve, reject) => {
        client.query(`SELECT * FROM products WHERE origin = $1 `, [param], (err, res) => {
            if (!err) {
                resolve(res.rows)
            } else {
                console.log(err.message);
                reject(err)
            }
            client.end;
        })
    })
}
function findByUtilisation(param) {
    return new Promise((resolve, reject) => {
        client.query(`SELECT * FROM products WHERE utilisation = $1 `, [param], (err, res) => {
            if (!err) {
                resolve(res.rows)
            } else {
                console.log(err.message);
                reject(err)
            }
            client.end;
        })
    })
}

function findByLabel(param) {
    return new Promise((resolve, reject) => {
        client.query(`SELECT * FROM products WHERE label = $1 `, [param], (err, res) => {
            if (!err) {
                resolve(res.rows)
            } else {
                console.log(err.message);
                reject(err)
            }
            client.end;
        })
    })
}
function findProductById(id) {
    return new Promise((resolve, reject) => {
        client.query(`SELECT * FROM products WHERE id = $1 `, [id], (err, res) => {
            if (!err) {
                resolve(res.rows)
            } else {
                console.log(err.message);
                reject(err)
            }
            client.end;
        })
    })
}
function create(product) {
    return new Promise((resolve, reject) => {
        client.query(`INSERT INTO products( title,description, price) VALUES($1,$2,$3)`, [product.title, product.description, product.price])
            .then(() => resolve({ message: 'Insert successfull' }))
            .catch((e) => reject(e))

    })
}
function update(id, product) {
    return new Promise((resolve, reject) => {
        client.query(`UPDATE products SET title=$1,description=$2, price=$3 WHERE $4=id`, [product.title, product.description, product.price, id])
            .then(() => resolve({ message: 'Update successfull' }))
            .catch((e) => reject(e))
    })
}
function remove(id) {
    return new Promise((resolve, reject) => {
        client.query(`DELETE FROM products  WHERE $1=id`, [id])
            .then(() => resolve())
            .catch((e) => reject(e))
    })
}
module.exports = {
    findAllProducts,
    findProductById, findByLabel, findByOrigin, findByPrice, findByUtilisation,
    create,
    update,
    remove,
    findByType
}
