require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Post = require('./models/post');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware для обработки JSON в запросах
app.use(express.json());

// Middleware для обработки CORS
app.use(cors());

// Middleware для обработки заголовков CORS
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});


mongoose
  .connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
    console.log('Checking MongoDB connection status...');
    console.log(`MongoDB connection state: ${mongoose.connection.readyState}`);
  })
  .catch((err) => {
    console.error('DB Connection error:', err.message);
    process.exit(1); 
  });

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: err.message });
});


app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
