require("dotenv").config();
const express = require('express');
const app = express();
const router = require('./routes/index.js');
const cors = require('cors');
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.use(router);

app.listen(port);

module.exports = app;