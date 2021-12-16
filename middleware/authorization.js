const {Favourite} = require("../models")

const authorization= async (req,res,next) => {
  try {
    const UserId = req.user.id
    console.log(UserId,">>>>>>>>>>>>>>");
    const result = await Favourite.findOne({
      where : {UserId}
    })
    if (!result) {
      throw {name : "favourite_not_found"}
    }
    next()
  } catch (err) {
    console.log(err, "authorization.............");
    next(err)
  }
}

module.exports = authorization