const mysql = require('mysql');

let connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_NAME,
    password: process.env.DB_PASS
  });
    connection.connect(function(err) {
      if (err) {
        console.error('Error connecting');
        return;
      }
      console.log('Thread id: ' + connection.threadId);
    });
  

    module.exports = connection;
