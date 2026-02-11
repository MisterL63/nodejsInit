const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const app = express();
const port = 3000;

app.listen(port || process.env.PORT, () => {
  console.log(`Server is running on port ${port}`);
});


