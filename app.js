require ('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT || 5000
const cors = require('cors')
const router = require ('./routes/index.js')

app.use(cors())
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(router)


app.listen(port, () => {
    console.log(`server running in port ${port}`)
})