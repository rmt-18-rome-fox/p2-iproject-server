const multer = require('multer')

// const fileStorage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, 'images')
//     },

//     filename: (req, file, cb) => {
//         cb(null, new Date().getTime() + '-' + file.originalname)
//     }
// })

// const fileFilter = (req, res, next)  => {
//         if (!req.file) {
//             throw {name : 'notFound'}
//         }

//         if (
//             req.file.mimetype === 'image/png' ||
//             req.file.mimetype === 'image/jpg' ||
//             req.file.mimetype === 'image/jpeg'
//         ) {
//             next()
//         } else {
//             throw {name : 'notImage'}
//         }
    
// }

// const uploadToImagekit = async (req, res, next) => {
//     try {
//         if (req.file.mimetype !== 'image/jpg' || req.file.mimetype !== 'image/jpeg') {
//             throw {name: 'notImage'}
//         }
        
//         if (req.file.size > 255000) {
//             throw {name: 'tooLarge'}
//         }
//     }
//     catch (err) {
//         next(err)
        
//     }
// }

// app.use(multer({storage: fileStorage, fileFilter: fileFilter}).single('imgUrl'))

// const iMulter = multer()

let iMulter = multer({
    limits: { fileSize: 255000 }
}).single('imgUrl');

// let iMulter = multer(uploadToImagekit).single('imgUrl');

module.exports = iMulter