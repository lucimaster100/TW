const { Client, Pool } = require("pg");

const client = new Client({
  host: "localhost",
  user: "postgres",
  port: 5432,
  password: "postgres",
  database: "postgres",
});

const execute = async (query) => {
  try {
    await client.connect(); // gets connection
    await client.query(query); // sends queries
    return true;
  } catch (error) {
    console.error(error.stack);
    return false;
  } finally {
    await client.end(); // closes connection
  }
};

const text = `
    CREATE TABLE  "products" (
	"id" SERIAL,
    "title" text  NOT NULL,
    "type" text  NOT NULL,
    "price" numeric NOT NULL,
    "origin" text  NOT NULL,
    "utilisation" text NOT NULL,
    "label" boolean NOT NULL,
    "image" text NOT NULL,
    "user_id" integer NOT NULL,
    "views" integer DEFAULT 0
    );`;

execute(text).then((result) => {
  if (result) {
    console.log("Table created");
  }
});
