import createDataBase_query from "./databasesetUp.js";
import create_tables from "./create-table-transactions.js";
import {
  insert_account,
  transfer_transaction,
} from "./insert-values-transactions.js";
import mysql from "mysql";
import util from "util";

const connection = mysql.createConnection({
  host: "localhost",
  user: "hyfuser",
  password: "hyfpassword",
});

const execQuery = util.promisify(connection.query.bind(connection));

async function main() {
  connection.connect();
  try {
    await execQuery(createDataBase_query);

    create_tables.forEach(async (sql_query) => await execQuery(sql_query));

    insert_account.forEach(async (sql_query) => await execQuery(sql_query));

    transfer_transaction.forEach(
      async (sql_query) => await execQuery(sql_query)
    );

    await execQuery("COMMIT WORK");
  } catch (err) {
    console.error(err);
    await execQuery("ROLLBACK");
  } finally {
    connection.end();
  }
}
main();
