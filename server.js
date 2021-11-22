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

// GET all candidates
// db.query(`SELECT * FROM candidates`, (err, rows) => {
//     console.log(rows);
// })

// GET a single candidate
// db.query(`SELECT * FROM candidates WHERE id=1`, (err, row) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log(row);
// });

// DELETE a candidate
// db.query(`DELETE FROM candidates WHERE id = ?`, 1, (err, res) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log(res);
// });

// CREATE a candidate
const sql = `INSERT INTO candidates (id, first_name, last_name, industry_connected) VALUES (?,?,?,?)`;
const params = [1, 'Ronald', 'Firbank', 1];

db.query(sql, params, (err, res) => {
    if (err) {
        console.log(err);
    }
    console.log(res);
});

// Default response (Page Not Found)
app.use((req, res) => {
    res.status(404).end();
});

// Start the express server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});