const FormData = require("form-data")
const axios = require("axios")
require('dotenv').config()

const uploadImagekit =  (req,res,next) => { 
    const privateKey = process.env.PRIVATEKEY
    if (!req.file) {
        next()


    } else {
        const form = new FormData()
        form.append("file",req.file.buffer.toString("base64"))
        form.append("fileName", req.file.originalname)
        axios({
            url: "https://upload.imagekit.io/api/v1/files/upload",
            method: "post",
            data: form,
            headers: form.getHeaders(),
            auth: {
                username: privateKey
            },
        })
        
        .then((result) =>{
            req.body.imgUrl = result.data.url
            next()
        })
        .catch((err) =>{
            console.log(err)
            next(err)
        })
        
    }
    


}
module.exports = {  uploadImagekit }