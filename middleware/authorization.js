const {User, WatchList} = require('../models/index')

const authorization = async (req, res, next) => {
  try {
    const UserId = req.user.id
    const {JikanAnimeId} = req.params
    const watchList = await WatchList.findOne({where: {JikanAnimeId, UserId}})
    if(!watchList) throw {name: "WatchList Not Found"}
    if(watchList.UserId !== UserId) throw {name: "Forbidden Access"}
    next()
  } catch (err) {
    next(err)
  }
}

module.exports = authorization