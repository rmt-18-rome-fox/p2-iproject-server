const express = require('express')
const app = express()
const router = express.Router()

const ControllerUser = require('../controller/userController')
const ControllerMovie = require('../controller/movieController')

const {
    authenMidleware,
    authorMidleware
} = require('../midleware/midleware')


const movie = require("./movie")
const custumer = require("./custumer")


router.post('/register', ControllerUser.registerUser)
router.post('/login', ControllerUser.loginUser)
router.post('/googlelogin', ControllerUser.googleLogin)

router.use("/custumer", custumer)

router.use(authenMidleware)

router.get('/genre', ControllerMovie.getGenre)
router.get('/history', ControllerMovie.historyMovie)
router.use("/movies", movie)


// router.get("/movies", ControllerMovie.listMovie)
// router.post('/movies', instanceMulter.single("imageFile"), uploadToImagekit, ControllerMovie.addMovies)
// router.get("/movies/:id", ControllerMovie.detailsMovie)
// router.delete("/movies/:id", authorMidleware, ControllerMovie.deleteMovie)
// router.put("/movies/:id", authorMidleware, ControllerMovie.editMovie) 



module.exports = router