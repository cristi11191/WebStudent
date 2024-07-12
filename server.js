// server.js

const express = require('express');
const mysql = require('mysql2/promise'); // Using mysql2 promise API for async/await support
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json()); // Parse application/json
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
// MySQL Connection Pool
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'university',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

// Route to handle login
app.post('/api/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const connection = await pool.getConnection();
        const [rows] = await connection.query('SELECT * FROM users WHERE email = ?', [email]);
        connection.release();

        if (rows.length > 0) {
            const user = rows[0];
            console.log(user.password);
            console.log(password);
            // In a real application, you should compare the password hash, not the plaintext password
            if (user.password.trim() === password.trim()) {
                res.json({ success: true, message: 'Login successful' });
            } else {
                res.json({ success: false, message: 'Incorrect password' });
            }
        } else {
            res.json({ success: false, message: 'User not found' });
        }
    } catch (error) {
        console.error('Error executing MySQL query:', error);
        res.status(500).json({ success: false, message: 'An error occurred. Please try again.' });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
