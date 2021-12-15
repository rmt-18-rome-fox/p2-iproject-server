const {Bookmark} = require("../models/index")
const axios = require("axios")
const apiUrl = "https://gutendex.com"

const allBooks = async (req, res, next) =>{
    try{
        let {page, search} = req.query

        if(page){
            const books = await axios.get(`${apiUrl}/books?page=${page}`)
            if(books.data.results.length == 0) throw {name: "BOOKS_NOT_FOUND"}

            res.status(200).json({books:books.data.results, currentPage: page})
        }else{
            page = 1
            if(search){
                search = search.toLowerCase()
                const books = await axios.get(`${apiUrl}/books?search=${search}`)
                if(books.data.results.length == 0) throw {name: "BOOKS_NOT_FOUND"}

                res.status(200).json({books:books.data.results, currentPage: page})
            }else{
                const books = await axios.get(`${apiUrl}/books`)
                if(books.data.results.length == 0) throw {name: "BOOKS_NOT_FOUND"}

                res.status(200).json({books:books.data.results, currentPage: page})
            }
        }
    }catch(err){
        if(err.name == "BOOKS_NOT_FOUND"){
            res.status(404).json({msg: "Books not found"})
        }else{
            res.status(500).json({msg: "Something went down"})
        }
    }
}

const bookDetail = async (req, res, next) =>{
    try{
        const id = req.params.bookId
        const bookDetail = await axios.get(`${apiUrl}/books/${id}`)
        if(!bookDetail.data.results.length == 0) throw {name: "BOOKS_NOT_FOUND"}

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
        if(!bookmarks) throw {name: "BOOKMARKS_NOT_FOUND"}

        res.status(200).json(bookmarks)
    }catch(err){
        if(err.name == "BOOKMARKS_NOT_FOUND"){
            res.status(404).json({msg: "Bookmarks not found"})
        }else{
            res.status(500).json({msg: "Something went down"})
        }
    }
}

const addBookmark = async (req, res, next) =>{
    try{
        const userId = req.user.id
        const id = +req.params.bookId
        const book = await axios.get(`${apiUrl}/books/${id}`)
        
        const newBookmark = await Bookmark.create({
            userId: userId,
            bookId: id,
            title: book.data.title,
            authors: book.data.authors[0].name,
            imageUrl: book.data.formats['image/jpeg'],
            subjects: book.data.subjects[0]
        })

        res.status(201).json(newBookmark)
    }catch(err){
        res.status(500).json({msg: "Something went down"})
    }
}

const deleteBookmark = async (req, res, next) =>{
    try{
        const userId = req.user.id
        const id = +req.params.bookId
        
        const book = await axios.get(`${apiUrl}/books/${id}`)
        
        const bookDel = await Bookmark.destroy({
            where:{
                userId: userId,
                bookId: id
            }
        })

        res.status(200).json(book.data)
    }catch(err){
        res.status(500).json({msg: "Something went down"})
    }
}

module.exports = {allBooks, bookDetail, addBookmark, allBookmarks, deleteBookmark}