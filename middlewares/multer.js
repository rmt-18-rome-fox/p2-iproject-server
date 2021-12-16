// multer untuk handle form-data untuk upload file dari client
const multer  = require('multer')

// construct options for multer
const storage = multer.memoryStorage()
const options = {
  storage: storage,

  // validate type pakai fileFilter
  fileFilter: (req, file, cb) => {
    if (file.mimetype.split("/")[0] !== "image") {
      cb(null, false)
      // construct custom error message
      const myError = new Error("Invalid image file type")
      // override custom error name
      myError.name = "file type"
      return cb(myError)
    } else {
      cb(null, true)
    }
  },
  
  // validate image file size pakai limits
  limits: {
    fileSize: 255000
  }
}

// function/middleware multer untuk endpoint
function upload(file) {
  return multer(options).single(file)
}

module.exports = upload

