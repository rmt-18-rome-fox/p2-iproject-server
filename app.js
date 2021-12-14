require('dotenv').config();
const express = require('express')
const cors = require('cors')
const router = require('./routes');
const ErrorHandler = require('./middlewares/errorHandler');

const app = express()
const PORT = process.env.PORT || 3000



app.use(cors())
app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.use(router)

app.use(ErrorHandler)

app.listen(PORT , () => {
    console.log(`App Listening to http://localhost:3000`)
})