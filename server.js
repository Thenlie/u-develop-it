const mysql = require('mysql2');

// Create express server
const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password:  '1qaz@WSX3edc$RFV',
        database: 'election'
    },
    console.log('Connected to the election database.')
);

db.query(`SELECT * FROM candidates`, (err, rows) => {
    console.log(rows);
})

// Default response (Page Not Found)
app.use((req, res) => {
    res.status(404).end();
});

// Start the express server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});