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
      const recipes = await axios ({
        method: "get",
        url: spoon + `/recipes/informationBulk?ids=${recipeIds}&apiKey=${apiKey}`,
      })
      const result = response.map(el => el.dataValues)
      recipes.data.forEach (recipeEl => {
        const {title, image, dishTypes, cuisines,id} = recipeEl
        const favIndex = result.findIndex(el => el.RecipeId === id)
        result[favIndex].recipes = {
          title,
          image,
          dishTypes, 
          cuisines
        }
      })
      res.status(200).json(result)
    }
    catch (err) {
      console.log(err);
      next(err)
    }
  }

  static getFavouriteByRecipeId = async (req,res,next) => {
    try {
      const UserId = req.user.id
      const RecipeId = req.params.id

      const favourite = await Favourite.findOne({where: {UserId, RecipeId}})
      res.json(favourite)

    } catch (error) {
      next(error)
    }
  }

  static addFavourite = async (req,res,next) =>{
    try {
      console.log("masuk>>>>>>>>>>>>>");
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
      const result = await Favourite.destroy({where :{id}})
      res.status(200).json({msg : "Success delete data"})
    } catch (err) {
      next(err)
    }
  }

  static editNote = async (req,res,next) => {
    try {
      const {notes} = req.body
      const {id} = req.params
      const result = await Favourite.update({notes}, {where : {id}, returning:true})
      res.status(200).json({msg : "Recipe's notes updated"})
    } catch (err) {
      next(err)
    }
  }
}