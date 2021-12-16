require('dotenv').config();
const express = require('express')
const cors = require('cors')
const router = require('./routes');
const history = require('connect-history-api-fallback');

const app = express()
app.use(history())
app.use(cors())
const http = require('http');
const server = http.createServer(app);
// const { Server } = require("socket.io");
// const io = new Server(server);
const io = require("socket.io")(server, {
    cors: {
        origin: "http://localhost:8084",
        methods: ["GET", "POST"],
        allowedHeaders: ["access_token"],
        credentials: true
    }
});

const ErrorHandler = require('./middlewares/errorHandler');

const PORT = process.env.PORT || 3000

io.on('connection', (socket) => {
    console.log('a user connected');
    console.log(socket.id)
    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
});

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use(router)

app.use(ErrorHandler)

app.listen(PORT, () => {
    console.log(`App Listening to http://localhost:3000`)
})