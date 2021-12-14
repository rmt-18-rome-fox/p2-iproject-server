const cors = require('cors')
const express = require('express')
const { Controller } = require('./controllers/controller')
const errorHandler = require('./middlewares/errorHandler')
const { authentication } = require('./middlewares/authentication')
const app = express()
const port = 3000

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.post('/register', Controller.register)
app.post('/login', Controller.login)

app.post('/car', authentication, Controller.postCar)

app.use(errorHandler)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})


module.exports = app
