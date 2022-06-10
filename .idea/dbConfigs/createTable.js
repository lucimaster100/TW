
const { Client, Pool } = require('pg')

const client = new Client({
    host: "localhost",
    user: "postgres",
    port: 5432,
    password: 'postgres',
    database: 'postgres'
})




const insertUser = async (title, type, price, origin, utilisation, label) => {
    try {
        await client.connect();           // gets connection
        await client.query(
            `INSERT INTO "products" ("title", "type","price", "origin","utilisation", "label")  
             VALUES ($1, $2,$3,$4,$5,$6)`, [title, type, price, origin, utilisation, label]); // sends queries
        return true;
    } catch (error) {
        console.error(error.stack);
        return false;
    } finally {
        await client.end();               // closes connection
    }
};

insertUser('Madagascar', 'Cask', '190', 'Germany', 'WornOff', '0').then(result => {
    if (result) {
        console.log('User inserted');
    }
});