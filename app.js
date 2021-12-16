require('dotenv').config();
const express = require('express')
const cors = require('cors')
const router = require('./routes');

const app = express()
app.use(cors())

const ErrorHandler = require('./middlewares/errorHandler');

const PORT = process.env.PORT || 3000

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use(router)

app.use(ErrorHandler)

app.listen(PORT, () => {
    console.log(`App Listening to http://localhost:3000`)
})