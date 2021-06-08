const {Pool,Client}=new require('pg')

const pool =new Pool({
    user: "postgres",
    host: "localhost",
    password: "postgres",
    database:"Hero",
    port: 5432
})

pool.query("SELECT * from dc", (err, res) => {
    console.log(err, res);
    pool.end();
});