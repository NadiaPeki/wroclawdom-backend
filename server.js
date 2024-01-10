const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Post = require('./models/post');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3002;
const URL = 'mongodb+srv://napekarskaya:nadia060290i@cluster0.e3cmski.mongodb.net/postsbase';

const corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200,
  credentials: true,
};

app.use(cors(corsOptions));

// Middleware для обработки JSON в запросах
app.use(express.json());

// Middleware для обработки ошибок
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: err.message });
});

// Подключение роутов
const postRoutes = require('./routes/post-routes');
app.use(postRoutes);

// Подключение к MongoDB
mongoose
  .connect(URL, {useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => {
    console.error('DB Connection error:', err);
    process.exit(1); // Завершаем процесс с ошибкой
  });

// Запуск сервера
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
