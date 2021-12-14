const express = require('express')
const app = express()
const port = 3000
const userController = require("./controller/userController")
const bookController = require("./controller/bookController")
const middleware = require("./middleware/middleware")
app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.post("/register", userController.userRegister)
app.post("/login", userController.userLogin)
// app.use(middleware.authentication)
app.get("/books", bookController.allBooks)
app.get("/bookmarks", bookController.allBookmarks)
app.post("/bookmarks/:bookId", bookController.addBookmark)

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })