require('dotenv').config()
const express = require('express')
const app = express()
const routes = require('./routes');
const cors = require('cors')
const port = process.env.PORT ||5000

//cors
app.use(cors())

//body parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//routes
app.use(routes);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })