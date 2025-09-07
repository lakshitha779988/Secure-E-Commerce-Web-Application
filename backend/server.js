require('dotenv').config();
const app = require('./app');
const connectDB = require('./app/config/db');
const fs = require('fs');
const path = require('path');
const https = require('https');



const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();


const options = {
  key: fs.readFileSync('./cert/key.key'),
  cert: fs.readFileSync('./cert/cert.crt'),
};

https.createServer(options, app).listen(PORT, () => {
  console.log(`HTTPS running on https://localhost:${PORT}`);
});


// Handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
  console.log('Unhandled Promise Rejection:', err.message);
  server.close(() => {
    process.exit(1);
  });
});

// Handle uncaught exceptions
process.on('uncaughtException', (err) => {
  console.log('Uncaught Exception:', err.message);
  process.exit(1);
});