
const {Pool,Client}=new require('pg')

const pool =new Pool({
    user: "postgres",
    host: "localhost",
    password: "postgres",
    database:"Hero",
    port: 5432
})

/*Dc table*/

// pool.query("CREATE TABLE Marvel(page_id VARCHAR(100), name VARCHAR(100),urlslug VARCHAR(100),ID VARCHAR(100),ALIGN VARCHAR(100),EYE VARCHAR(100),HAIR VARCHAR(100),SEX VARCHAR(100),GSM VARCHAR(100),ALIVE VARCHAR(100),APPEARANCES VARCHAR(100),FIRST VARCHAR(100),APPEARANCE VARCHAR(100),YEAR VARCHAR(100))",(err,rss)=> {
//     console.log(err, rss)
//     pool.end()
// })


// pool.query("CREATE TABLE DC(page_id VARCHAR(100), name VARCHAR(100),urlslug VARCHAR(100),ID VARCHAR(100),ALIGN VARCHAR(100),EYE VARCHAR(100),HAIR VARCHAR(100),SEX VARCHAR(100),GSM VARCHAR(100),ALIVE VARCHAR(100),APPEARANCES VARCHAR(100),FIRST VARCHAR(100),APPEARANCE VARCHAR(100),YEAR VARCHAR(100))",(err,rss)=> {
//     console.log(err, rss)
//     pool.end()
// })


// var pgtools = require("pgtools");
// const config = {
//     user: "postgres",
//     host: "localhost",
//     password: "postgres",
//     database:"Hero",
//     port: 5432
// };
pgtools.createdb(config, "Hero", function(err, res) {
    if (err) {
        console.error(err);
        process.exit(-1);
    }
    console.log(res);
});