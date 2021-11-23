const db = require('./db/connection');
const apiRoutes = require('./routes/apiRoutes');

// Create express server
const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Use apiRoutes
app.use('/api', apiRoutes);

// Default response (Page Not Found)
app.use((req, res) => {
    res.status(404).end();
});

// Start the express server at DB connection
db.connect(err => {
    if (err) throw err;
    console.log('Database Connected.');
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
});