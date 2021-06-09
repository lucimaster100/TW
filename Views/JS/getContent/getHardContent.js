const {Pool} = require('pg');
const pool = new Pool({
    user: "postgres",
    host: "localhost",
    password: "postgres",
    database: "Hero",
    port: 5432
})


var array = []
const query = `SELECT * FROM dc ORDER BY Random() LIMIT 2`;
pool.connect((err, client, done) => {
    if (err) throw err;
    client.query(query, (err, res) => {
        done();
        if (err) {
            console.log(err.stack);
        } else {
            const data = res.rows;
            data.forEach(row => {
                array.push(`${row.name}`)
            })
            ouut()
        }

    });
});


function ouut() {
    console.log(array[1])

}
