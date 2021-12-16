const multer = require('multer')

let iMulter = multer({
    limits: { fileSize: 2550000 }
}).single('imgUrl');

module.exports = iMulter