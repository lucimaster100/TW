const { Client, Pool } = require('pg')

const client = new Client({
    host: "localhost",
    user: "postgres",
    port: 5432,
    password: 'postgres',
    database: 'postgres'
})
const execute = async (query) => {
    try {
        await client.connect();     // gets connection
        await client.query(query);  // sends queries
        return true;
    } catch (error) {
        console.error(error.stack);
        return false;
    } finally {
        await client.end();         // closes connection
    }
};

const text = `
    CREATE TABLE IF NOT EXISTS "users" (
	    "id" SERIAL,
	    "username" text NOT NULL,
	    "email" text NOT NULL,
        "password" text NOT NULL,
        "description" text,
        "img" bytea,
        "isAdmin" boolean NOT NULL,
	    CONSTRAINT users_pkey PRIMARY KEY (id),
        CONSTRAINT users_email_key UNIQUE (email),
         CONSTRAINT users_username_key UNIQUE (username)
    );`;

execute(text).then(result => {
    if (result) {
        console.log('Table created');
    }
});