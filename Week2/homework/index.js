const createDataBase_query = require("./databasesetUp.js");
const exercise1_queries = require("./exercise1.js");
const exercise2_queries = require("./exercise2.js");
const exercise3_queries = require("./exercise3.js");
const exercise4_queries = require("./exercise4.js");
const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "localhost",
  user: "hyfuser",
  password: "hyfpassword",
});

const execute_query = (sql_query) => {
  connection.query(sql_query, (error, results) => {
    if (error) throw error;
    else {
      console.table(results);
    }
  });
};

const execute_queries = (queries) => {
  for (const item in queries) {
    if (Array.isArray(queries[item])) {
      queries[item].forEach(execute_query);
    } else {
      execute_query(queries[item]);
    }
  }
};

connection.connect();
execute_queries(createDataBase_query);
execute_queries(exercise1_queries);
execute_queries(exercise2_queries);
execute_queries(exercise3_queries);
execute_queries(exercise4_queries);
connection.end();
