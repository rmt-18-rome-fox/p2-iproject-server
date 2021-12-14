require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')

// MIDDLEWARE
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

// router
const router = require('./router')

app.use(router)

module.exports = app