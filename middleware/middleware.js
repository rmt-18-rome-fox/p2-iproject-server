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
        if(err.name == "USER_NOT_FOUND"){
            res.status(401).json({msg: "User not found"})
        }else{
            res.status(500).json({msg: "Something went down"})
        }
    }
}

const authorization = async (req, res, next) =>{
    try{
        const id = +req.params.bookId
        const bookmark = await Bookmark.findOne({
            where:{
                userId: req.user.id,
                bookId: id
            }
        })

        if (!bookmark) {
            throw {name:"BOOKMARKS_NOT_FOUND"}
        }
        
        if (bookmark.userId == req.user.id) {
            next()
        }else {
            throw { name: "UNAUTHORIZED"}
        }
    }catch(err){
        if(err.name == "BOOKMARKS_NOT_FOUND"){
            res.status(404).json({msg: "Bookmarks not found"})
        }else if(err.name == "UNAUTHORIZED"){
            res.status(401).json({msg: "You are unauthorized"})
        }else{
            res.status(500).json({msg: "Something went down"})
        }
    }
}

module.exports = { authentication, authorization }