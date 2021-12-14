
const {apiKey, spoon} = process.env
const axios = require ('axios')

module.exports = class RecipeController {
  
  static showRecipe = async (req,res,next) => {
    try {
      const {searchTerm} = req.query ? req.query: null;
      const number = req.query.number ? req.query.number : 10;
      if(isNaN(number) || number>50) number = null;
      const type = req.query.type ? ("&type=" + (req.query.type).toLowerCase()) :""
      const cuisine = req.query.cuisine ? ("&cuisine="+(req.query.cuisine).toLowerCase()) :""
      const author = req.query.author ? ("&author=" + (req.query.author).toLowerCase()) : ""
      if (searchTerm && number) {
        const showRecipe = await axios ({
          url: spoon+`/recipes/complexSearch?query=${searchTerm}&number=${number}${types}${cuisines}${author}&apiKey=${apiKey}`,
          method: "get",
        })
        const data = showRecipe.data.recipes[0]
        res.status(200).json({
          id: data.id,
          title: data.title,
          readyInMinutes: data.readyInMinutes,
          serving: data.serving,
          image: data.image,
          summary: data.summary,
          cuisines: data.cuisines,
          dishTypes: data.dishTypes,
          analyzedInstructions: data.analyzedInstructions[0].steps,
        })
      } else {
        const showRecipe = await axios ({
          method: "get",
          url: spoon+`/recipes/random?number=1&apiKey=${apiKey}`
        })
        const data = showRecipe.data.recipes[0]
        res.status(200).json(data)
      }
    } catch (err) {
      next(err)
    }
  }
}