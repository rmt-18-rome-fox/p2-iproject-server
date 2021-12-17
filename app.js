// Allhandsondeck
// Abdulrachman Hasan

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const express = require("express")
const { createServer } = require("http")
const { Server } = require("socket.io")
const cors = require("cors")
const router = require('./routes')
const errorHandler = require('./middlewares/errorHandler')

const app = express()
const PORT = process.env.PORT || 3000

app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(router)
app.use(errorHandler)

const httpServer = createServer(app)
const io = new Server(httpServer, {
  cors: {
    origin: "https://allhandsondeck-v0.web.app",
    methods: ["GET", "POST"],
    credentials: true
  },
  allowEIO3: true
})

io.on("connection", (socket) => {
  socket.on('chat', function (data) {
    socket.broadcast.emit('chat', data)
  })
  socket.on('draw', function (data) {
    socket.broadcast.emit('draw', data)
  })
  socket.on('mouseDown', function () {
    socket.broadcast.emit('mouseDown')
  })
  socket.on('reset', function () {
    socket.broadcast.emit('reset')
  })
})

httpServer.listen(PORT, () => {
  console.log('Allhandsondeck runninng on port: ', PORT)
})