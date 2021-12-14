const {Favourite} = require("../models")
const {apiKey, spoon} = process.env
const axios = require ('axios')



module.exports = class FavouriteFood {

  static showFavourite = async (req,res,next) =>{
    try {
      const UserId = req.user.id
      const result = await Favourite.findAll( 
        { 
          where : {UserId},
        }
      )
      res.status(200).json(result)
    }
    catch (err) {
      next(err)
    }
  }

  static addFavourite = async (req,res,next) =>{
    try {
      const {notes} = req.body
      const id = req.params.id
      const UserId = req.user.id
      const RecipeId = +id
      const input = {UserId, RecipeId, notes }
      const find = await axios ({
        method: "get",
        url: spoon + `/recipes/${RecipeId}/information?&apiKey=${apiKey}`,
      })
      if (!find) {
        next ({name : "Food_not_found"})
      }
      const result = await Favourite.create(input)
      res.status(200).json(result)

    } catch(err) {
      next(err)
    }
  }

  static editNote = async (req,res,next) => {
    try {
      const {notes} = req.body
      const {RecipeId} = req.params
      const UserId = req.user.id
      const input = {notes}
      const result = await Favourite.update(input, {where : UserId, RecipeId})
      res.status(200).json(result)
    } catch (err) {
      next(err)
    }
  }
}