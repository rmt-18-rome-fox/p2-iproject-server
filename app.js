const express = require('express')
const app = express()
const router = require('./routes/index')
const port =  10000
const cors = require("cors")
const {errorhandlers} = require('./middleware/errorhandlers')



app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(router)
app.use(errorhandlers)


app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`)
})
 

