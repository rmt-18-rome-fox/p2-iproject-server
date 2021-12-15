const {User, Bookmark} = require("../models/index")
const axios = require("axios")
const apiUrl = "https://gutendex.com"

const authentication = async (req, res, next) =>{
    try{
        const payload = convertPayload(access_token)
        
        const user = await User.findOne({
            where:{
                id: payload.id,
                email: payload.email
            }
        })

        if(!user) throw {name: "USER_NOT_FOUND"}

        req.user = {
            id: user.id,
            email: user.email,
            name: user.username
        }

        next()
    }catch(err){

    }
}

const authorization = async (req, res, next) =>{
    try{
        const id = req.params.bookId

        const book = await axios.get(`${apiUrl}/books/${id}`)

        const bookmark = await Bookmark.findOne({
            where:{
                userId: req.user.id,
                title: book.data.title
            }
        })

        if (!bookmark) {
            throw {name:"BOOKMARK_NOT_FOUND"}
         } 

        if (book.UserId == req.user.id) {
            next()
        }else {
            throw { name: "UNAUTHORIZED"}
        }
    }catch(err){

    }
}

module.exports = { authentication, authorization }