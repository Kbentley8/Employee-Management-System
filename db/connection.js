const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  // MySQL Username
  user: 'root'
  // MySQL password
  password: 'root9642'
  database: 'employees'
  
});

connection.connect(function (err) {
    if (err) throw err;



});

module.exports = connection;
