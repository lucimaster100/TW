
const { Client, Pool } = require('pg')

const client = new Client({
    host: "localhost",
    user: "postgres",
    port: 5432,
    password: 'postgres',
    database: 'postgres'
})




const insertUser = async (username, email, password, isAdmin) => {
    try {
        await client.connect();           // gets connection
        await client.query(
            `INSERT INTO "users" ("username", "email","password","isAdmin")  
             VALUES ($1, $2,$3,$4)`, [username, email, password,isAdmin]); // sends queries
        return true;
    } catch (error) {
        console.error(error.stack);
        return false;
    } finally {
        await client.end();               // closes connection
    }
};

insertUser('username6', 'email6@gmail.com', 'password', '0').then(result => {
    if (result) {
        console.log('User inserted');
    }
});