import createDataBase_query from "./databasesetUp.js";
import exercise1_queries from "./exercise1.js";
import exercise2_queries from "./exercise2.js";
import exercise3_queries from "./exercise3.js";
import exercise4_queries from "./exercise4.js";
import mysql from "mysql2";

const pool = mysql
  .createPool({
    host: "localhost",
    user: "hyfuser",
    password: "hyfpassword",
  })
  .promise();

async function execute_query(sql_query) {
  try {
    const [results] = await pool.query(sql_query);
    console.table(results);
  } catch (err) {
    pool.end();
    throw err;
  }
}

async function execute_queries(queries) {
  for (const item in queries) {
    if (Array.isArray(queries[item])) {
      for (const sql_query of queries[item]) {
        await execute_query(sql_query);
      }
    } else {
      await execute_query(queries[item]);
    }
  }
}

async function main() {
  try {
    await execute_queries(createDataBase_query);
    await execute_queries(exercise1_queries);
    await execute_queries(exercise2_queries);
    await execute_queries(exercise3_queries);
    await execute_queries(exercise4_queries);
    pool.end();
  } catch (err) {
    console.error(err);
  }
}
main();
