const axios = require("axios")
const apiUrl = "https://gutendex.com"

const allBooks = async (req, res, next) =>{
    try{
        const {page} = req.query

        if(page){
            const books = await axios.get(`${apiUrl}/books?page${page}`)
            
            res.status(200).json(books)
        }else{
            const books = await axios.get(`${apiUrl}/books`)
            
            res.status(200).json(books)
        }
    }catch(err){

    }
}

const bookDetail = async (req, res, next) =>{
    try{
        const id = req.params.bookId
        const bookDetail = await await axios.get(`${apiUrl}/books/${id}`)

        res.status(200).json(bookDetail)
    }catch(err){
        
    }
}

const addBookmark = async (req, res, next) =>{
    try{

    }catch(err){

    }
}

module.exports = {allBooks, bookDetail, addBookmark}