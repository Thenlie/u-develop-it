const mysql = require('mysql2');

// Connect to SQL database
const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password:  '1qaz@WSX3edc$RFV',
        database: 'election'
    },
    console.log('Connected to the election database.')
);

module.exports = db;