const {Favourite} = require("../models")
const {apiKey, spoon} = process.env
const axios = require ('axios')

module.exports = class FavouriteFood {

  static showFavourite = async (req,res,next) =>{
    try {
      const UserId = req.user.id
      const response = await Favourite.findAll( 
        { 
          where : {UserId},
        }
      )
      const recipeIds = response.map(el => el.dataValues.RecipeId)
      const find = await axios ({
        method: "get",
        url: spoon + `/recipes/informationBulk?ids=${recipeIds}&apiKey=${apiKey}`,
      })
      const result = []
      find.data.forEach (el => {
        result.push ({id: el.id, title: el.title, image: el.image, dishTypes: el.dishTypes, cuisines: el.cuisines})
      })
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
      console.log(err);
      next(err)
    }
  }

  static deleteFavourite = async (req,res,next) => {
    try {
      const id = req.params.id
      const UserId = req.user.id
      const RecipeId = +id
      const result = await Favourite.delete({where : UserId, RecipeId})
      res.status(200).json(result)
    } catch (err) {
      next(err)
    }
  }
}