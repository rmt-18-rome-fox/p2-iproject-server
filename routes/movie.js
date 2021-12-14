const express = require('express')
const app = express()
const router = express.Router()


const ControllerMovie = require('../controller/movieController') 

const {authorMidleware, authorAdminMidleware} = require('../midleware/midleware')

const uploadToImagekit = require('../midleware/uploadtoimagekit')
const instanceMulter = require('../midleware/multer')




router.get("/", ControllerMovie.listMovie)
router.post('/', instanceMulter.single("imageFile"), uploadToImagekit, ControllerMovie.addMovies)

router.get("/:id", ControllerMovie.detailsMovie)
router.delete("/:id", authorMidleware, ControllerMovie.deleteMovie)
router.put("/:id", authorMidleware, instanceMulter.single("imageFile"), uploadToImagekit, ControllerMovie.editMovie)
router.patch('/:id', authorAdminMidleware, ControllerMovie.updateStatus)




module.exports = router