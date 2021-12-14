const routes = require('express').Router()

const userController = require("../controllers/userController")
const indexController = require("../controllers/indexController")
const errorHandler = require("../errorHandler/index")

routes.post("/register", userController.register)
routes.post("/login", userController.register)

routes.get("/club", indexController.getClub)
routes.get("/club/:id", indexController.getClub)
routes.get("/fixture", indexController.getClub)



routes.use(errorHandler)

module.exports = routes