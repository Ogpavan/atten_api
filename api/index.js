const express = require('express');
const connectDB = require('../config/db');
const dotenv = require('dotenv');
const cors = require('cors');

// Load environment variables
dotenv.config();

// Connect to the database
connectDB();

const app = express();
const allowedOrigins = ['https://atten-frontend.vercel.app'];

// Enable CORS for all routes and methods
app.use(cors({
  origin: allowedOrigins,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'], // Adjust as needed
  credentials: true
}));

// Enable preflight handling for all routes
app.options('*', cors());

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
