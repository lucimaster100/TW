var mysql = require('mysql');

var con = mysql.createConnection({
    host: "127.0.0.1",
    port: "8889",
    user: "root",
    password: "",
    database: "mydb"

});
// con.connect(function(err) {
//     console.log("Connected!");
//     con.query("CREATE DATABASE Superhero", function (err, result) {
//         console.log("Database created");
//     });
// });

con.connect(function(err) {
    console.log("Connected!");
    var sql = "CREATE TABLE DcTable (page_id VARCHAR(255), name VARCHAR(255),urlslug VARCHAR(255),ID VARCHAR(255),ALIGN VARCHAR(255),EYE VARCHAR(255),HAIR VARCHAR(255),SEX VARCHAR(255),GSM VARCHAR(255),ALIVE VARCHAR(255),";
    con.query(sql, function (err, result) {
        console.log("Table created");
    });
});


