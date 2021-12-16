const express = require('express')
const app =  express()
const port = process.env.PORT || 3000
const cors = require('cors')
const { errHandler } = require('./middlewares/errHandler')
const { auth } = require('./helpers/auth')
const Controller = require('./controller')
const ApiController = require('./apiController')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.post('/register', Controller.register)
app.post('/login', Controller.login)
app.use(auth)
app.post('/:UserId/history', Controller.postHistory)
app.get('/:UserId/history', Controller.getHistory)
app.post('/api/mapbox', ApiController.mapbox)
app.post('/api/carbon-interface', ApiController.carbonInterface)

app.use(errHandler)
app.listen(port, () => {
    console.log(`listening to port ${port}`)
})