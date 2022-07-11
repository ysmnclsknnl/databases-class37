#  Give an example of a value that can be passed as name and code that would take advantage of SQL-injection and (fetch all the records in the database)

name= asfsdfdf' OR '1'='1
code=asdsddsf' OR '1'='1

# Rewrite the function so that it is no longer vulnerable to SQL injection

function getPopulation(Country, name, code, cb) {
  // assuming that connection to the database is established and stored as conn
  <b>conn.query(`select * from ${Country}
     WHERE Name=${connection.escape(name)} AND code=${connection.escape(code)}`</b>,
    function (err, result) {
      if (err) cb(err);
      if (result.length == 0) cb(new Error("Not found"));
      cb(null, result[0].name);
    }
  );
}


# Note: I also solved this exercise in exercise3-sql_injection.js in the same folder. 
The codes in the file depend on your sql_injection.js in this repo. 