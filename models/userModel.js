
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
        client.query(`SELECT * FROM users`, (err, res) => {
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


module.exports = {
    findAllUsers,
    findUserById
}
