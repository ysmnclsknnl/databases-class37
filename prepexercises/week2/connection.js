const mysql = require("mysql");
const sql_queries = require("./data.js");
const connection = mysql.createConnection({
  host: "localhost",
  user: "hyfuser",
  password: "hyfpassword",
});
connection.connect();
sql_queries.forEach((sql_query) => {
  connection.query(sql_query, (error, results) => {
    if (error) throw error;
    console.table(results);
  });
});

connection.end();
