const {Favourite} = require("../models")

async (req,res,next) => {
  try {
    const UserId = req.user.id
    const result = await Favourite.findOne({
      where : {UserId, id}
    })
    if (!result) {
      throw {name : "favourite_not_found"}
    }
    next()
  } catch (err) {
    next(err)
  }
}