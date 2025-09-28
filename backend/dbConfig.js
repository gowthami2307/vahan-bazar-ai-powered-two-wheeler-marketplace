// MySQL database configuration
const mysql = require('mysql2');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root', // Change if your MySQL username is different
  password: 'gunmaxx',
  database: 'vt',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

module.exports = pool;