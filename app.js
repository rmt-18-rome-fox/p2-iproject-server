const express = require('express')
const app =  express()
const port = 3000
const cors = require('cors')
const { errHandler } = require('./middlewares/errHandler')
const { auth } = require('./helpers/auth')
const Controller = require('./controller')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.post('/register', Controller.register)
app.post('/login', Controller.login)
app.use(auth)
app.post('/:UserId/history', Controller.postHistory)
app.get('/:UserId/history', Controller.getHistory)

app.use(errHandler)
app.listen(port, () => {
    console.log(`listening to port ${port}`)
})