
var user=[]

const { Client } = require('pg')

const client = new Client({
    host: "localhost",
    user: "postgres",
    port: 5432,
    password: 'postgres',
    database: 'postgres'
})

client.connect();

function findAllUsers() {
    return new Promise((resolve, reject) => {
        client.query(`SELECT id,username,img FROM users`, (err, res) => {
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
function findUserById(id) {
    return new Promise((resolve, reject) => {
        client.query(`SELECT * FROM users WHERE id = $1 `, [id], (err, res) => {
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
function findUserByUsername(username) {
    return new Promise((resolve, reject) => {
        client.query(`SELECT * FROM users WHERE username = $1 `, [username], (err, res) => {
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
function findUserByEmail(email) {
    return new Promise((resolve, reject) => {
        client.query(`SELECT * FROM users WHERE email = $1 `, [email], (err, res) => {
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
function create(user) {
    return new Promise((resolve, reject) => {
        client.query(`INSERT INTO users( username,email, password) VALUES($1,$2,$3)`, [user.username, user.email, user.password])
            .then(() => resolve({ message: 'Insert successfull' }))
            .catch((e) => reject(e))

    })
}
function update(id, user) {
    console.log(user)
    return new Promise((resolve, reject) => {
        client.query(`UPDATE users SET username=$1,email=$2, password=$3,description=$4,img=$5,"isAdmin"=$6 WHERE $7=id`, [user.username, user.email, user.password,user.description,user.img,user.isAdmin ,id])
            .then(() => resolve({ message: 'Update successfull' }))
            .catch((e) => reject(e))
    })
}
function remove(id) {
    return new Promise((resolve, reject) => {
        client.query(`DELETE FROM users  WHERE $1=id`, [id])
            .then(() => resolve())
            .catch((e) => reject(e))
    })
}
module.exports = {
    findAllUsers,
    findUserById,
    create,
    update,
    remove,
    findUserByUsername,
    findUserByEmail
}
