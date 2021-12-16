const multer = require('multer')
const path = require('path')

const instanceMulter = multer({
  limits: { fileSize: 450_000 },
  fileFilter: async (req, file, cb) => {
    let mimeType = path.extname(file.originalname)
    if(
      mimeType !== '.jpg'
      && mimeType !== '.png'
      && mimeType !== '.jpeg'
    ) {
      return cb({
        code: 400,
        error: 'File gambar yang diperbolehkan hanya ".jpg", ".png", & ".jpeg"'
      },
        null
      )
    } else {
      cb(
        null, 
        true
      )
    }
  }
})

module.exports = { instanceMulter }