
const multer  = require('multer')

const storage = multer.memoryStorage()
const upload = multer({ 
    storage: storage,
    limits: {fileSize: 2550000}
})
// console.log(multer);

const UploadHandler = upload.single('imageUrl')

module.exports = UploadHandler