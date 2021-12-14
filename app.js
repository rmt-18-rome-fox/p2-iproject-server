const cors = require('cors')
const express = require('express')
const app = express()
const router = require('./routes')

const port = 3000

app.use(cors())
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.use(router)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})