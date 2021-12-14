const {User, WatchList} = require('../models/index')

const register = async(req, res, next) => {
  try {
    res.status(201).json('succes')
  } catch (err) {
    console.log({err});
  }
}

module.exports = {register}