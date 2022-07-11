import prompt from "prompt";
import mysql from "mysql";
import util from "util";

const connection = mysql.createConnection({
  host: "localhost",
  user: "hyfuser",
  password: "hyfpassword",
  database: "world",
  multipleStatements: true,
});

const execQuery = util.promisify(connection.query.bind(connection));
const input = util.promisify(prompt.get.bind(this));

async function getPopulation() {
  prompt.start();
  try {
    const { table } = await input(["table"]);
    const { name } = await input(["name"]);
    const { code } = await input(["code"]);

    // 1. Give an example of a value that can be passed as name and code that would take advantage of SQL-injection and (fetch all the records in the database)
    //  NAIVE CODE : const select_query = `select * from ${table} WHERE Name= '${name}'  AND code='${code}'`;
    // name= asfsdfdf' OR '1'='1
    // code=asdsddsf' OR '1'='1

    // 2. Rewrite the function so that it is no longer vulnerable to SQL injection
    //  I used Escaping the parameter ( replacing the unwanted characters)
    const select_query = `select * from ${table}
     WHERE Name=${connection.escape(name)} AND code=${connection.escape(code)}`;

    connection.connect();
    const results = await execQuery(select_query);
    for (const r of results) {
      console.table(r);
    }
  } catch (error) {
    console.error(error.message);
  }

  connection.end();
}

getPopulation();
