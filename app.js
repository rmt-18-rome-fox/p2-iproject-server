// Allhandsondeck
// Abdulrachman Hasan

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const express = require("express")
const { createServer } = require("http")
const { Server } = require("socket.io")
const cors = require("cors")

const app = express()
const PORT = process.env.PORT || 3000

app.use(cors())

const httpServer = createServer(app)
const io = new Server(httpServer, {
  cors: {
    origin: "http://localhost:8080",
    methods: ["GET", "POST"],
    credentials: true
  },
  allowEIO3: true
})

io.on("connection", (socket) => {
  // di sini isi methods socket io
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
  console.log('berlari ...')
})