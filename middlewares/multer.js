const multer  = require('multer')

const storage = multer.memoryStorage()
const options = {
  storage: storage,

  fileFilter: (req, file, cb) => {
    if (file.mimetype.split("/")[0] !== "image") {
      cb(null, false)
      const myError = new Error("Invalid image file type")
      myError.name = "file type"
      return cb(myError)
    } else {
      cb(null, true)
    }
  }
}

// function/middleware multer untuk endpoint
function upload(file) {
  return multer(options).single(file)
}

module.exports = upload

