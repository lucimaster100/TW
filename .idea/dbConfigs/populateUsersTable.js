const { Client, Pool } = require("pg");

const client = new Client({
  host: "localhost",
  user: "postgres",
  port: 5432,
  password: "postgres",
  database: "postgres",
});

const insertUser = async (username, email, password, isAdmin) => {
  try {
    await client.connect(); // gets connection
    await client.query(
      `INSERT INTO "users" ("username", "email","password","isAdmin")  
             VALUES ($1, $2,$3,$4)`,
      [username, email, password, isAdmin]
    ); // sends queries
    return true;
  } catch (error) {
    console.error(error.stack);
    return false;
  } finally {
    await client.end(); // closes connection
  }
};
password = "user";
let encPassword = "";
let key =
  "t6w9z$C&F)J@NcRfUjXn2r4u7x!A%D*G-KaPdSgVkYp3s6v8y/B?E(H+MbQeThWmZq4t7w!z$C&F)J@NcRfUjXn2r5u8x/A?D*G-KaPdSgVkYp3s6v9y$B&E)H+MbQeT";
for (let i = 0; i < Math.min(password.lenght, key.length); i++) {
  // append the result of the char from the code-point that results from
  // XORing the char codes (or 0 if one string is too short)
  encPassword += String.fromCharCode(
    (password.charCodeAt(i) || 0) ^ (key.charCodeAt(i) || 0)
  );
}
console.log(encPassword);
insertUser("user", "user@user.user", encPassword, "0").then((result) => {
  if (result) {
    console.log("User inserted");
  }
});
