const { Client, Pool } = require("pg");

const client = new Client({
  host: "localhost",
  user: "postgres",
  port: 5432,
  password: "postgres",
  database: "postgres",
});

const updateUser = async (userId) => {
  const query = `UPDATE "users" 
                   SET "isAdmin" = true 
                   WHERE "id" = $1`;
  try {
    await client.connect(); // gets connection
    await client.query(query, [userId]); // sends queries
    return true;
  } catch (error) {
    console.error(error.stack);
    return false;
  } finally {
    await client.end(); // closes connection
  }
};

updateUser("1").then((result) => {
  // userName, userRole, userId
  if (result) {
    console.log("User updated");
  }
});
