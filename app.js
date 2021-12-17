require('dotenv').config()
const express = require('express')
const cors = require('cors')
const router = require('./routes')

const port = process.env.PORT || 3000; 

const app = express()

app.use([cors(), express.json(), express.urlencoded({ extended: false })])

app.use(router)

app.listen(port, () => console.log(`App is running on ${port}`))
