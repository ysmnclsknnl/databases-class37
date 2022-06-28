const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "localhost",
  user: "hyfuser",
  password: "hyfpassword",
  database: "world",
});

const executeSqlQuery = (sqlQuery) => {
  connection.query(sqlQuery, (err, result) => {
    console.log(`executing ${sqlQuery}`);
    if (err) throw err;
    console.log(result);
  });
};

connection.connect();

//What are the names of countries with population greater than 8 million?
let sql_query = `SELECT Name FROM country WHERE Population>8000000`;
executeSqlQuery(sql_query);

// What are the names of countries that have “land” in their names?
sql_query = `SELECT Name FROM country WHERE name LIKE "%land%"`;
executeSqlQuery(sql_query);

// What are the names of the cities with population in between 500,000 and 1 million?
sql_query = `SELECT Name from city WHERE Population BETWEEN 500000 AND 1000000`;
executeSqlQuery(sql_query);

// What's the name of all the countries on the continent ‘Europe’?
sql_query = `SELECT Name FROM country WHERE Continent="Europe"`;
executeSqlQuery(sql_query);

// List all the countries in the descending order of their surface areas.
sql_query = `SELECT * FROM country ORDER BY SurfaceArea DESC`;
executeSqlQuery(sql_query);

// What are the names of all the cities in the Netherlands?
sql_query = `SELECT  ci.Name FROM city ci INNER JOIN country co ON ci.CountryCode=co.code WHERE co.name="Netherlands"`;
executeSqlQuery(sql_query);

// What is the population of Rotterdam?
sql_query = `SELECT Population FROM  city Where Name="Rotterdam"`;
executeSqlQuery(sql_query);

// What's the top 10 countries by Surface Area?
sql_query = `SELECT * FROM country ORDER BY SurfaceArea DESC LIMIT 10`;
executeSqlQuery(sql_query);

// What's the top 10 most populated cities?
sql_query = `SELECT * FROM city ORDER BY Population DESC LIMIT 10`;
executeSqlQuery(sql_query);

// What is the population number of the world?
sql_query = `SELECT SUM(Population) FROM city `;
executeSqlQuery(sql_query);
connection.end();
