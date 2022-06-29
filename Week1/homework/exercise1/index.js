const mysql = require("mysql");
const sql_queries = require("./queries.js");
const connection = mysql.createConnection({
  host: "localhost",
  user: "hyfuser",
  password: "hyfpassword",
});

const execute_queries = (arrayOfQueries) => {
  arrayOfQueries.forEach((query) => {
    connection.query(query, (error, result) => {
      if (error) throw error;
      console.table(result);
    });
  });
};

connection.connect();

execute_queries(sql_queries);

connection.end();
