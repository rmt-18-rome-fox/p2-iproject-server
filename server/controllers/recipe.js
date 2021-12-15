
const {apiKey, spoon} = process.env
const axios = require ('axios')

module.exports = class RecipeController {
  
  static showRecipe = async (req,res,next) => {
    try {
      const {searchTerm = "", number=3}= req.query 
      if ((searchTerm ) && number) {
        const showRecipe = await axios ({
          url: spoon+`/recipes/complexSearch?query=${searchTerm}&apiKey=${apiKey}`,
          method: "get",
        })
        res.status(200).json(showRecipe.data.results)
      } else {
        const showRecipe = await axios ({
          method: "get",
          url: spoon+`/recipes/random?number=2&apiKey=${apiKey}`
        })
        const menu = showRecipe.data.recipes
        const menus =[]
        menu.forEach ( el => {
          menus.push({id: el.id, title: el.title, image: el.image, dishTypes: el.dishTypes, cuisines: el.cuisines})
        })
        res.status(200).json(menus)
      }
    } catch (err) {
      console.log(err);
      next(err)
    }
  }

  static showDetail = async (req,res,next) =>{
    try {
      const id = req.params.id
      const find = await axios ({
        method: "get",
        url: spoon + `/recipes/${id}/information?apiKey=${apiKey}`,
      })
      const data= find.data
      console.log(data);
      if (!data) {
        next ({name : "Food_not_found"})
      }
      const steps =  []
        const ingredients = []
        data.extendedIngredients.forEach(el => {
          ingredients.push(el.original)
        })
        data.analyzedInstructions[0].steps.forEach(el => {
          steps.push(el.step)
        })
        res.status(200).json({
          id: data.id,
          title: data.title,
          readyInMinutes: data.readyInMinutes,
          serving: data.serving,
          image: data.image,
          summary: data.summary,
          cuisines: data.cuisines,
          dishTypes: data.dishTypes,
          ingredients,
          steps,
        })
      // res.status(200).json(find)
    } catch(err) {
      console.log(err);
      next(err)
    }
  }
}