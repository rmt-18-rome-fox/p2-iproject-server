const {User, WatchList} = require('../models/index')

const postWatchList = async (req, res, next) => {
  try {
    const UserId = req.user.id
    const {priority, JikanAnimeId} = req.body
    const watchList = await WatchList.create({
      UserId,
      JikanAnimeId,
      priority,
      status: "active"
    })
    res.status(201).json(watchList)
  } catch (err) {
    console.log({err});
  }
}

const patchStatusWatchList = async (req, res, next) => {
  try {
    const {JikanAnimeId} = req.params
    const {status} = req.body
    const watchList = await WatchList.update({status}, {where: {JikanAnimeId}})
    res.status(201).json({status})
  } catch (err) {
    console.log({err});
  }
}

module.exports = {postWatchList, patchStatusWatchList}