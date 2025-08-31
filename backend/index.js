require("dotenv").config();
const openDBConnection = require('./src/config/db');
const express = require('express');
const router = require('./src/routes');
const app = express();
const port = process.env.PORT ?? 3000;

app.use('/api', router);

openDBConnection()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server listening on port ${port}`);
    });
  })
  .catch((err) => {
    console.error('Failed to connect to the database', err);
  });
