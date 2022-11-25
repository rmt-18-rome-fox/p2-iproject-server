const {User, WatchList} = require('../models/index')

const postWatchList = async (req, res, next) => {
  try {
    const UserId = req.user.id
    const {title, priority, JikanAnimeId, image_url} = req.body
    const isExists = await WatchList.findOne({where: {UserId, JikanAnimeId}})
    if(isExists) throw {name: "This Anime Has Been Added To Your WatchList"}
    const watchList = await WatchList.create({
      title,
      UserId,
      JikanAnimeId,
      priority,
      image_url,
      status: "Not Watched"
    })
    res.status(201).json(watchList)
  } catch (err) {
    next(err)
  }
}

const patchStatusWatchList = async (req, res, next) => {
  try {
    const {JikanAnimeId} = req.params
    const {status} = req.body
    await WatchList.update({status}, {where: {JikanAnimeId}})
    res.status(201).json({status})
  } catch (err) {
    next(err)
  }
}

const getWatchLists = async (req, res, next) => {
  try {
    const UserId = req.user.id
    const watchlists = await WatchList.findAll({
      where: {
        UserId
      },
      include: {
        model: User,
        attributes: {
          exclude: ["password"]
        }
      }
    })
    res.status(200).json(watchlists)
  } catch (err) {
    next(err)
  }
}

const deleteWatchList = async (req, res, next) => {
  try {
    const UserId = req.user.id
    const {JikanAnimeId} = req.params
    const destroy = WatchList.destroy({where: {UserId, JikanAnimeId}})
    res.status(200).json("Succes Delete WatchList")
  } catch (err) {
    next(err)
  }
}

module.exports = {postWatchList, patchStatusWatchList, getWatchLists, deleteWatchList}