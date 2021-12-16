require("dotenv").config({path:'../.env'})
PRIVATEKEY = process.env.PRIVATEKEY
const multer = require('multer');
const path = require('path')

const instanceMulter = multer(
    {
        limits: { fileSize: 255000 },
        fileFilter: function (req, file, cb) {
            const extname = path.extname(file.originalname).toLowerCase()
            if(extname !== '.jpg' && extname !== '.png' && extname !== '.svg' && extname !== '.jpeg'){
                return cb({name: "file type image"})
            }
            cb(null, true)
        }
    })
const multerMiddleware = instanceMulter.single("urlPicture")

module.exports = { multerMiddleware }