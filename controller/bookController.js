const {Bookmark} = require("../models/index")
const axios = require("axios")
const apiUrl = "https://gutendex.com"

const allBooks = async (req, res, next) =>{
    try{
        const {page} = req.query
        if(page){
            const books = await axios.get(`${apiUrl}/books?page${page}`)
            
            res.status(200).json(books.data)
        }else{
            const books = await axios.get(`${apiUrl}/books`)
            res.status(200).json(books.data)
        }
    }catch(err){

    }
}

const bookDetail = async (req, res, next) =>{
    try{
        console.log("masuk");
        const id = req.params.bookId
        const bookDetail = await axios.get(`${apiUrl}/books/${id}`)
        console.log(bookDetail);
        res.status(200).json(bookDetail.data)
    }catch(err){
        
    }
}

const allBookmarks = async (req, res, next) =>{
    try{
        const userId = req.user.id

        const bookmarks = await Bookmark.findAll({
            where:{
                userId: userId
            }
        })

        res.status(200).json(bookmarks)
    }catch(err){

    }
}

const addBookmark = async (req, res, next) =>{
    try{
        const userId = req.user.id
        const id = req.params.bookId
        const book = await axios.get(`${apiUrl}/books/${id}`)

        const newBookmark = await Bookmark.create({
            userId: userId,
            title: book.data.title,
            authors: book.data.authors[0].name,
            imageUrl: book.data.formats['image/jpeg'],
            subjects: book.data.subjects[0]
        })

        res.status(201).json(newBookmark)
    }catch(err){

    }
}

const deleteBookmark = async (req, res, next) =>{
    try{
        console.log("masuk");
        const userId = req.user.id
        const id = req.params.bookId

        const book = await axios.get(`${apiUrl}/books/${id}`)

        const bookDel = await Bookmark.destroy({
            where:{
                userId: userId,
                title: book.data.title
            }
        })
        res.status(201).json(book)
    }catch(err){

    }
}

module.exports = {allBooks, bookDetail, addBookmark, allBookmarks, deleteBookmark}