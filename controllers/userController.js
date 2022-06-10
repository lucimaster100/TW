const User = require('../models/userModel')
const { getPostData } = require('../utils')

async function getAllUsers(req, res) {
    try {
        const user = await User.findAllUsers()
        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify(user))
    } catch (error) {
        console.log(error)
    }
}
async function getUserByUsername(req, res,name) {
    try {
        const user = await User.findUserByUsername(name)
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
async function getUserByEmail(req, res,email) {
    try {
        const user = await User.findUserByEmail(email)
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
async function createUser(req, res) {
    try {
        const body = await getPostData(req)
        const { username, email, password } = JSON.parse(body)
        const user = {
            username,
            email,
            password
        }
        const newUser = await User.create(user)
        res.writeHead(201, { 'Content-Type': 'application/json' })
        return res.end(JSON.stringify(newUser))

    } catch (error) {
        console.log(error)
    }
} async function updateUser(req, res, id) {
    try {
        const user = await User.findUserById(id)
        if (!user[0]) {
            res.writeHead(404, { 'Content-Type': 'application/json' })
            res.end(JSON.stringify({ message: 'Product Not Found' }))
        } else {
            const body = await getPostData(req)
            const { username, email, password, description, img, isAdmin } = JSON.parse(body)

            const userData = {
                username: username || user[0].username,
                email: email || user[0].email,
                password: password || user[0].password,
                description: description || user[0].description,
                img: img || user[0].img,
                isAdmin: isAdmin || user[0].isAdmin
            }
            const updUser = await User.update(id, userData)
            res.writeHead(200, { 'Content-Type': 'application/json' })
            return res.end(JSON.stringify(updUser))
        }

    } catch (error) {
        console.log(error)
    }
}
async function deleteUser(req, res, id) {
    try {
        const user = await User.findUserById(id)
        if (!user) {
            res.writeHead(404, { 'Content-Type': 'application/json' })
            res.end(JSON.stringify({ message: 'Product Not Found' }))
        } else {
            await User.remove(id)
            res.writeHead(200, { 'Content-Type': 'application/json' })
            res.end(JSON.stringify({ message: `Product ${id} removed` }))
        }
    } catch (error) {
        console.log(error)
    }
}
module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    getUserByUsername,
    getUserByEmail
}
