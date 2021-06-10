const {Client} = require('pg');
const client = new Client({
    user: "postgres",
    host: "localhost",
    password: "postgres",
    database: "Hero",
    port: 5432
})
var array=[]
client.connect()

client.query(`SELECT * FROM dc ORDER BY Random() LIMIT 4`,(err,res)=>{
    if (!err) {
        const data = res.rows;
        data.forEach(row => {
            array.push(`${row.name}`)
        })
        console.log(array)
    }

    else{console.log(err.message)}
    client.end
})



