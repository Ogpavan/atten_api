const express = require('express');
const connectDB = require('../config/db');
const dotenv = require('dotenv');
const cors = require('cors');

// Load environment variables
dotenv.config();

// Connect to the database
connectDB();

const app = express();

// Enable CORS for all origins
app.use(cors({
  origin: '*', // Allow all origins
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed methods
  credentials: true, // Allow credentials if needed
}));

// Middleware to parse JSON
app.use(express.json());

app.get('/', (req, res) => {
    res.send('API running');
});

// Use routes
app.use('/api/auth', require('../routes/auth'));
app.use('/api/students', require('../routes/student'));
app.use('/api/attendance', require('../routes/attendance'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
