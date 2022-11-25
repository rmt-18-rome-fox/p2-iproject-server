require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const cors = require('cors');
const router = require('./routes/index');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.use('/', router)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})