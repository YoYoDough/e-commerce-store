
const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
require('dotenv').config();

// Initiate express
const app = express();
app.use(express.json());
app.use(cors());

// Log environment variables
console.log('DB_HOST:', process.env.DB_HOST);
console.log('DB_USER:', process.env.DB_USER);
console.log('DB_PASSWORD:', process.env.DB_PASSWORD);
console.log('DB_NAME:', process.env.DB_NAME);

// MySQL connection
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

// Attempt to connect to MySQL
console.log('Attempting to connect to MySQL...');
connection.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL database:', err);
        return;
    }
    console.log('Connected to MySQL database');
});

// Start the server
const PORT = process.env.PORT || 3007;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});