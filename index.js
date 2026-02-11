const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
dotenv.config();
const app = express();
const port = process.env.PORT || 3000;
const connectDB = require('./db');

connectDB();

app.use(express.static(path.join(__dirname, 'front')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'front', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
