const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const pizzaRoutes = require('./routes/post-routes');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Health Check Route
app.get('/', (req, res) => {
  res.send('Server is up and running!');
});

// Post Routes
// app.use('/api', postsRoutes);

// Error Handling Middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: err.message });
});

// Connect to MongoDB
const MONGODB_URI =
  'mongodb+srv://napekarskaya:nadia060290i@cluster0.e3cmski.mongodb.net/postsbase';
mongoose
  .connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => {
    console.error('DB Connection error:', err.message);
    process.exit(1);
  });

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
