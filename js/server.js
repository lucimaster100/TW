const http = require('http')
const prodC = require('../controllers/productController')
const userC = require('../controllers/userController')
const url = require('url')
const fs = require('fs')
const lookup = require('mime-types').lookup
const fetch = require('node-fetch');



const server = http.createServer((req, res) => {
    if (req.url == '/products' && req.method == 'GET') {
        prodC.getAllProducts(req, res);

    }else if(req.url == '/trending'&& req.method == 'GET'){
        prodC.getTrending(req,res);
    }
    else if (req.url.match(/\/productsType\/([a-zA-Z]+)/) && req.method == 'GET') {
        const type = req.url.split('/')[2]
        prodC.getProductbyType(req, res, type)
    }
    else if (req.url.match(/\/productsUtilisation\/([a-zA-Z]+)/) && req.method == 'GET') {
        const utilisation = req.url.split('/')[2]
        prodC.getProductbyUtilisation(req, res, utilisation)
    }
    else if (req.url.match(/\/productsUserID\/([0-9]+)/) && req.method == 'GET') {
        const utilisation = req.url.split('/')[2]
        prodC.getProductbyUserID(req, res, utilisation)
    }
    else if (req.url.match(/\/productsUserIDExport\/([0-9]+)/) && req.method == 'GET') {
        const id = req.url.split('/')[2]
        prodC.getProductbyUserIDExport(req, res, id)
    }
    else if (req.url=='/productsPrice/ascending' && req.method == 'GET') {
        prodC.getProductbyPriceASC(req, res)
    }
    else if (req.url=='/productsPrice/descending' && req.method == 'GET') {
        prodC.getProductbyPriceDESC(req, res)
    }
    else if (req.url=='/countCask' && req.method == 'GET') {
        prodC.countCask(req, res)
    }
    else if (req.url=='/countFlask' && req.method == 'GET') {
        prodC.countFlask(req, res)
    }
    else if (req.url=='/countGlassBottle' && req.method == 'GET') {
        prodC.countGlassBottle(req, res)
    }
    else if (req.url=='/countJug' && req.method == 'GET') {
        prodC.countJug(req, res)
    }
    else if (req.url=='/countPlasticBottle' && req.method == 'GET') {
        prodC.countPlasticBottle(req, res)
    }
    else if (req.url=='/countBarrel' && req.method == 'GET') {
        prodC.countBarrel(req, res)
    }
    
    else if (req.url.match(/\/productsLabel\/([a-z]+)/) && req.method == 'GET') {
        const label = req.url.split('/')[2]
        prodC.getProductbyLabel(req, res, label)
    }
    else if (req.url.match(/\/productsOrigin\/([a-zA-Z]+)/) && req.method == 'GET') {
        const origin = req.url.split('/')[2]
        prodC.getProductbyOrigin(req, res, origin)
    } else if (req.url.match(/\/products\/([0-9]+)/) && req.method == 'GET') {
        const id = req.url.split('/')[2]
        prodC.getProductById(req, res, id)
    } else if (req.url == '/products' && req.method == 'POST') {
        prodC.createProduct(req, res)
    } else if (req.url.match(/\/products\/([0-9]+)/) && req.method == 'PUT') {
        const id = req.url.split('/')[2]
        prodC.updateProduct(req, res, id)
    } else if (req.url.match(/\/products\/([0-9]+)/) && req.method == 'DELETE') {
        const id = req.url.split('/')[2]
        prodC.deleteProduct(req, res, id)
    } else if (req.url == '/users' && req.method == 'GET') {
        userC.getAllUsers(req, res)
    } else if (req.url.match(/\/usersById\/([0-9]+)/) && req.method == 'GET') {
        const id = req.url.split('/')[2]
        userC.getUserById(req, res, id)
    } else if (req.url.match(/\/userProfileById\/([0-9]+)/) && req.method == 'GET') {
        const id = req.url.split('/')[2]
        userC.getUserProfileById(req, res, id)
    } else if (req.url.match(/\/usersByName\/([a-zA-Z]+)/) && req.method == 'GET') {
        const name = req.url.split('/')[2]
        userC.getUserByUsername(req, res, name)
    }
    else if (req.url.match(/\/usersByEmail\/([a-zA-Z0-9@]+)/) && req.method == 'GET') {
        const email = req.url.split('/')[2]
        userC.getUserByEmail(req, res, email)
    } else if (req.url == '/users' && req.method == 'POST') {
        userC.createUser(req, res)
    } else if (req.url.match(/\/users\/([0-9]+)/) && req.method == 'PUT') {
        const id = req.url.split('/')[2]
        userC.updateUser(req, res, id)
    } else if (req.url.match(/\/users\/([0-9]+)/) && req.method == 'DELETE') {
        const id = req.url.split('/')[2]
        userC.deleteUser(req, res, id)
    } else {
        let parsedURL = url.parse(req.url, true)
        let path = parsedURL.path.replace(/^\/+|\/+$/g, "")
        if (path == "") {
            path = "login.html"
        }
        let file = "./Views/" + path
        res.writeHead(200, { 'Content-Type': 'text/html' })
        fs.readFile(file, function (error, content) {
            if (error) {
                res.writeHead(404)
                res.write('File not found')
                res.end()
            } else {
                let mime = lookup(path)
                res.writeHead(200, { 'Content-Type': mime })
                res.write(content)
                res.end()
            }

        })

    }

})

const PORT = process.env.PORT || 5000

server.listen(PORT, () => console.log(`Server running on port ${PORT}`))
