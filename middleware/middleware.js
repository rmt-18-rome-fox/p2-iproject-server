const {User, Bookmark} = require("../models/index")
const axios = require("axios")
const jwt = require("jsonwebtoken")
const apiUrl = "https://gutendex.com"

const authentication = async (req, res, next) =>{
    try{
        const {access_token} = req.headers
        const payload = jwt.verify(access_token, "sangatsangatrahasia")
        
        const user = await User.findOne({
            where:{
                id: payload.id,
                name: payload.name
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
        const id = +req.params.bookId
        const book = await axios.get(`${apiUrl}/books/${id}`)
        
        const bookmark = await Bookmark.findOne({
            where:{
                userId: req.user.id,
                bookId: id
            }
        })
        if (!bookmark) {
            throw {name:"BOOKMARK_NOT_FOUND"}
        } 
        console.log("dapet", bookmark);
        if (bookmark.userId == req.user.id) {
            next()
        }else {
            throw { name: "UNAUTHORIZED"}
        }
    }catch(err){

    }
}

module.exports = { authentication, authorization }