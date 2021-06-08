const {Pool,Client}=new require('pg')

const pool =new Pool({
    user: "postgres",
    host: "localhost",
    password: "postgres",
    database:"Hero",
    port: 5432
})

pool.query(
    "INSERT INTO student(page_id,name,urlslug,ID,ALIGN,EYE,HAIR,SEX,GSM,ALIVE,APPEARANCES,FIRST APPEARANCE,YEAR)VALUES('Mary Ann', 'Wilters', 20, '74 S Westgate St', 'mroyster@royster.com')",
    (err, res) => {
        console.log(err, res);
        pool.end();
    }
);