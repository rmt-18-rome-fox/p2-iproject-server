const express = require('express')
const app = express()
const router = require('./routes/index')
const port =  10000
const cors = require("cors")
const {errorhandlers} = require('./middleware/errorhandlers')
const {createServer} = require('http')
const { Server } = require('socket.io')
const { on } = require('events')
const httpServer = createServer(app)

const io = new Server(httpServer, {
    cors: {
        origin: '*'
    }
})

let arrOfUsers = []
let arrOfChats = []
io.on("connection", (socket) => {
   console.log(" A user conected", socket.id);


    socket.on("disconnect", () =>{
        console.log("disconnect")
    })

    socket.on("customEventFromClient", (payload) =>{
        console.log("terima payload", payload)

        socket.emit("customEventFromServer", "kembaliannya server")
    })
    socket.on("setUsername", (payload) =>{
        arrOfUsers.push({
            username: payload,
            status: "online"
        })
        console.log(arrOfUsers)
        
    })
    socket.on("sendMessageToServer", (payload) =>{
        arrOfChats.push(payload)
        console.log(arrOfChats)
        io.emit("receiveMessageFromServer",arrOfChats )
    })
});



app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(router)
app.use(errorhandlers)


httpServer.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`)
})
 

