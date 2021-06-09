const {Pool} = require('pg');
const pool = new Pool({
    user: "postgres",
    host: "localhost",
    password: "postgres",
    database: "Hero",
    port: 5432
})
pool.on('error', (err, client) => {
    console.error('Error:', err);
});

let str = "";

const query = `SELECT * FROM dc ORDER BY Random() LIMIT 1`;
pool.connect((err, client, done) => {
    if (err) throw err;
    client.query(query, (err, res) => {
        done();
        if (err) {
            console.log(err.stack);
        } else {
            const data = res.rows;
            data.forEach(row => {
                console.log(`Name: ${row.name}`);
                str += `${row.name}`
            })
        }

    });
});

