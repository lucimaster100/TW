
const {Pool,Client}=new require('pg')

const pool =new Pool({
    user: "postgres",
    host: "localhost",
    password: "postgres",
    database:"Hero",
    port: 5432
})



pool.query("CREATE TABLE Marvel(page_id VARCHAR(100), name VARCHAR(100),urlslug VARCHAR(100),ID VARCHAR(100),ALIGN VARCHAR(100),EYE VARCHAR(100),HAIR VARCHAR(100),SEX VARCHAR(100),GSM VARCHAR(100),ALIVE VARCHAR(100),APPEARANCES VARCHAR(100),FIRST_APPEARANCE VARCHAR(100),YEAR VARCHAR(100))",(err,rss)=> {
    console.log(err, rss)
    pool.end()
})


pool.query("CREATE TABLE DC(page_id VARCHAR(100), name VARCHAR(100),urlslug VARCHAR(100),ID VARCHAR(100),ALIGN VARCHAR(100),EYE VARCHAR(100),HAIR VARCHAR(100),SEX VARCHAR(100),GSM VARCHAR(100),ALIVE VARCHAR(100),APPEARANCES VARCHAR(100),FIRST_APPEARANCE VARCHAR(100),YEAR VARCHAR(100))",(err,rss)=> {
    console.log(err, rss)
    pool.end()
})


pool.query("CREATE TABLE Users(ID INT, name VARCHAR(100),pass VARCHAR(100))",(err,rss)=> {
    console.log(err, rss)
    pool.end()
})
