const Product = require('../models/productModel')
const { getPostData } = require('../utils')

async function getAllProducts(req, res) {
    try {
        const products = await Product.findAllProducts()
        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify(products))
    } catch (error) {
        console.log(error)
    }
}
async function getProductById(req, res, id) {
    try {
        const product = await Product.findProductById(id)
        if (!product) {
            res.writeHead(404, { 'Content-Type': 'application/json' })
            res.end(JSON.stringify({ message: 'Product Not Found' }))
        } else {
            res.writeHead(200, { 'Content-Type': 'application/json' })
            res.end(JSON.stringify(product))
        }
    } catch (error) {
        console.log(error)
    }
}
async function getProductbyType(req, res, type) {
    try {
        const product = await Product.findByType(type)
        if (!product) {
            res.writeHead(404, { 'Content-Type': 'application/json' })
            res.end(JSON.stringify({ message: 'Product Not Found' }))
        } else {
            res.writeHead(200, { 'Content-Type': 'application/json' })
            res.end(JSON.stringify(product))
        }
    } catch (error) {
        console.log(error)
    }
}
async function getProductbyUtilisation(req, res, utilisation) {
    try {
        const product = await Product.findByUtilisation(utilisation)
        if (!product) {
            res.writeHead(404, { 'Content-Type': 'application/json' })
            res.end(JSON.stringify({ message: 'Product Not Found' }))
        } else {
            res.writeHead(200, { 'Content-Type': 'application/json' })
            res.end(JSON.stringify(product))
        }
    } catch (error) {
        console.log(error)
    }
}
async function getProductbyLabel(req, res, label) {
    try {
        const product = await Product.findByLabel(label)
        if (!product) {
            res.writeHead(404, { 'Content-Type': 'application/json' })
            res.end(JSON.stringify({ message: 'Product Not Found' }))
        } else {
            res.writeHead(200, { 'Content-Type': 'application/json' })
            res.end(JSON.stringify(product))
        }
    } catch (error) {
        console.log(error)
    }
}
async function getProductbyOrigin(req, res, origin) {
    try {
        const product = await Product.findByOrigin(origin)
        if (!product) {
            res.writeHead(404, { 'Content-Type': 'application/json' })
            res.end(JSON.stringify({ message: 'Product Not Found' }))
        } else {
            res.writeHead(200, { 'Content-Type': 'application/json' })
            res.end(JSON.stringify(product))
        }
    } catch (error) {
        console.log(error)
    }
}
async function getProductbyPrice(req, res, price) {
    try {
        const product = await Product.findByPrice(price)
        if (!product) {
            res.writeHead(404, { 'Content-Type': 'application/json' })
            res.end(JSON.stringify({ message: 'Product Not Found' }))
        } else {
            res.writeHead(200, { 'Content-Type': 'application/json' })
            res.end(JSON.stringify(product))
        }
    } catch (error) {
        console.log(error)
    }
}
async function createProduct(req, res) {
    try {
        const body = await getPostData(req)

        const { title, description, price } = JSON.parse(body)

        const product = {
            title,
            description,
            price
        }

        const newProduct = await Product.create(product)
        res.writeHead(201, { 'Content-Type': 'application/json' })
        return res.end(JSON.stringify(newProduct))

    } catch (error) {
        console.log(error)
    }
}
async function updateProduct(req, res, id) {
    try {
        const product = await Product.findProductById(id)

        if (!product) {
            res.writeHead(404, { 'Content-Type': 'application/json' })
            res.end(JSON.stringify({ message: 'Product Not Found' }))
        } else {
            const body = await getPostData(req)

            const { title, description, price } = JSON.parse(body)

            const productData = {
                title: title || product[0].title,
                description: description || product[0].description,
                price: price || product[0].price
            }

            const updProduct = await Product.update(id, productData)
            res.writeHead(200, { 'Content-Type': 'application/json' })
            return res.end(JSON.stringify(updProduct))
        }

    } catch (error) {
        console.log(error)
    }
}
async function deleteProduct(req, res, id) {
    try {
        const product = await Product.findProductById(id)
        if (!product) {
            res.writeHead(404, { 'Content-Type': 'application/json' })
            res.end(JSON.stringify({ message: 'Product Not Found' }))
        } else {
            await Product.remove(id)
            res.writeHead(200, { 'Content-Type': 'application/json' })
            res.end(JSON.stringify({ message: `Product ${id} removed` }))
        }
    } catch (error) {
        console.log(error)
    }
}
module.exports = {
    getAllProducts,
    getProductById,
    getProductbyType,
    getProductbyUtilisation,
    getProductbyOrigin,
    getProductbyPrice,
    getProductbyLabel,
    createProduct,
    updateProduct,
    deleteProduct
}
