const {User, WatchList} = require('../models/index')

const postWatchList = async (req, res, next) => {
  try {
    res.status(200).json('ini')
  } catch (err) {
    console.log({err});
  }
}

module.exports = {postWatchList}