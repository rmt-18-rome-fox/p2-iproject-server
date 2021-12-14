const user = require('express').Router()

const UserController = require('../controller/UserController')

user.post('/register', UserController.register)
user.post('/login', UserController.login)

module.exports = user