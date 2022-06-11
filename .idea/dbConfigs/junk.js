
const pg = require('pg');
const client = new pg.Client({
    host: "localhost",
    user: "postgres",
    port: 5432,
    password: 'postgres',
    database: 'postgres'
})
client.connect();


email="email2";
console.log(email)

 client.query("SELECT * from users where email=$1",[email], (err, res) => {
   console.log(err, res.rows);
   client.end();
 });
