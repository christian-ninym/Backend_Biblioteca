const mysql = require('mysql2');

export const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'biblioteca',
  port: 3306,
  password: 'root'
});


connection.query(
    'SELECT * FROM editorial',
    function(err, results, fields) {
      console.log(results); 
      console.log(fields); 
    }
  );