require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000
const cors = require("cors")
const userController = require("./controller/userController")
const bookController = require("./controller/bookController")
const langController = require("./controller/detectLangController")
const middleware = require("./middleware/middleware")

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors())

app.post("/detectlang", langController.detectLang)
app.post("/register", userController.userRegister)
app.post("/login", userController.userLogin)
app.use(middleware.authentication)
app.get("/books", bookController.allBooks)
app.get("/books/:bookId", bookController.bookDetail)
app.get("/bookmarks", bookController.allBookmarks)
app.post("/bookmarks/:bookId", bookController.addBookmark)
app.delete("/bookmarks/:bookId", middleware.authorization, bookController.deleteBookmark)

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})