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
async function getProductbyUserID(req, res, id) {
    try {
        const product = await Product.findByUserID(id)
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
async function getProductbyPriceASC(req, res) {
    try {
        const product = await Product.findByPriceASC()
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
async function getProductbyPriceDESC(req, res) {
    try {
        const product = await Product.findByPriceDESC()
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
async function countCask(req, res) {
    try {
        const product = await Product.countCask()
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
async function countPlasticBottle(req, res) {
    try {
        const product = await Product.countPlasticBottle()
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
async function countJug(req, res) {
    try {
        const product = await Product.countJug()
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
async function countGlassBottle(req, res) {
    try {
        const product = await Product.countGlassBottle()
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
async function countFlask(req, res) {
    try {
        const product = await Product.countFlask()
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
async function countBarrel(req, res) {
    try {
        const product = await Product.countBarrel()
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

        const { title,type, price,origin,utilisation,label,image,user_id } = JSON.parse(body)

        const product = {
            title,
            type,
            price,
            origin,
            utilisation,
            label,
            image,
            user_id
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

            const { title,type, price,origin,utilisation,label,image,user_id } = JSON.parse(body)

            const productData = {
                title: title || product[0].title,
                type: type || product[0].type,
                price: price || product[0].price,
                origin: origin || product[0].origin,
                utilisation: utilisation || product[0].utilisation,
                label: label || product[0].label,
                image: image || product[0].image,
                user_id: user_id || product[0].user_id
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
    getProductbyPriceASC,getProductbyPriceDESC,getProductbyUserID,
    getProductbyLabel,countCask,countFlask,countGlassBottle,countJug,countPlasticBottle,countBarrel,
    createProduct,
    updateProduct,
    deleteProduct
}
