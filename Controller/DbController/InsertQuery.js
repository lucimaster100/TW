
const {Pool,Client}=new require('pg')

const pool =new Pool({
    user: "postgres",
    host: "localhost",
    password: "postgres",
    database:"Hero",
    port: 5432
})

pool.query(
    "INSERT INTO users(id, name, pass,email)VALUES(1, 'user1', 'user1','user@user.com')",
    (err, res) => {
        console.log(err, res);
        pool.end();
    }
);