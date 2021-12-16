const cors = require('cors')
const express = require('express')
const { Controller } = require('./controllers/controller')
const errorHandler = require('./middlewares/errorHandler')
const { authentication } = require('./middlewares/authentication')
const { multerMiddleware } = require('./middlewares/multerMiddleware')
const { uploadFile } = require('./middlewares/uploadFile')
const app = express()
const port = 3000


const { createServer } = require('http')

const { Server } = require('socket.io')

const httpServer = createServer(app)

let arrOfUser = []
let arrOfChats = []

const io = new Server(httpServer,{
  cors: {
    origin: "*"
  }
})

io.on('connection', (socket) => {
  console.log('A User Connect', socket.id)

  socket.on('disconnect', () => {
    console.log('A user disconnect')
  })

  socket.on("forRefresh", (payload) => {
    socket.emit('receiveMessageFromServer', arrOfChats)
  })

  socket.on("setUsername", (payload) => {
    arrOfUser.push({
      username: payload,
      status: 'online'
    })
  })

  socket.on('sendMessageToServer', (payload => {
    arrOfChats.push(payload)


    io.emit('RECMESSERVER', arrOfChats)
  }))
  
})





app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.post('/register', Controller.register)
app.post('/login', Controller.login)
app.post('/authGoogle', Controller.authGoogle)

app.get('/car/:id', Controller.getCarById)
app.get('/car', Controller.getCar)
app.post('/car', authentication, multerMiddleware, uploadFile, Controller.postCar)
app.put('/car/:id', authentication, multerMiddleware, uploadFile, Controller.editCar)

app.post('/book/:carId', Controller.postBook)
app.get('/book', Controller.getBook)

app.use(errorHandler)

httpServer.listen(3000, () =>{
  console.log('listening on port 3000')
})


module.exports = app
