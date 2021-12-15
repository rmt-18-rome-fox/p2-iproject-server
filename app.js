require('dotenv').config();
const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');
const router = require('./routes')
const {errHandler} = require('./middlewares/errorHandler');
const {createServer} = require('http');
const {Server} = require('socket.io');
const httpServer = createServer(app);

const io = new Server(httpServer, {
  cors: {
    origin: '*',
  }
});

let userData = []
io.on('connection', (socket) => {
  console.log('User connected', socket.id);

  socket.on('disconnect', () => {
    console.log('User disconnected');
  })

  socket.on('user', (value) => {
    userData.push({
      username: value,
      status: 'Online'
    })
    socket.emit('customEventServer', 'server exchange');
    console.log(userData);
  })

})

app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(router)

app.use(errHandler)

// app.listen(port, () => {
//   console.log(`Web app listening at http://localhost:${port}`)
// })
httpServer.listen(port, () => {
  console.log(`Web app listening at http://localhost:${port}`);
})