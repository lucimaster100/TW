const User = require('../models/userModel')
const { getPostData } = require('../utils')

async function getAllUsers(req, res) {
    try {
        const products = await User.findAllUsers()
        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify(products))
    } catch (error) {
        console.log(error)
    }
}
async function getUserById(req, res, id) {
    try {
        const user = await User.findUserById(id)
        if (!user) {
            res.writeHead(404, { 'Content-Type': 'application/json' })
            res.end(JSON.stringify({ message: 'Product Not Found' }))
        } else {
            res.writeHead(200, { 'Content-Type': 'application/json' })
            res.end(JSON.stringify(user))
        }
    } catch (error) {
        console.log(error)
    }
}
module.exports = {
    getAllUsers,
    getUserById
}
