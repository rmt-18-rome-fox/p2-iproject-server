const express = require('express')
const app = express()
const router = express.Router()

const {
    authenMidleware,
    authorMidleware
} = require('../midleware/midleware')

const ControllerUserPublic = require("../controller/publicUserController")
const ControllerMoviePublic = require("../controller/publicMovieController")

router.post('/register', ControllerUserPublic.registerUser)
router.post('/login', ControllerUserPublic.loginUser)
router.post('/googlelogin', ControllerUserPublic.googleLogin)

router.get('/allmovies', ControllerMoviePublic.listMovie)

router.get('/movies', ControllerMoviePublic.getMoviesPage)
router.get('/movies/:id', ControllerMoviePublic.detailsMovie)
router.post('/movies/:id', authenMidleware, ControllerMoviePublic.addFavoriteMovie)
router.delete('/movies/:id', authenMidleware, ControllerMoviePublic.deleteFavoriteMovie)
router.get('/favorite', authenMidleware, ControllerMoviePublic.showFavorite)





module.exports = router