if (process.env.NODE_ENV !== "production") {
  require("dotenv").config()
}

const cors = require('cors')
const express = require('express')
const app = express()
const routes = require("./routes")

app.use(cors())
app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use('/', routes)

module.exports = app
// const port = 3000
// app.listen(port, () => {
//   console.log(`Listening port: ${port}`);
// })