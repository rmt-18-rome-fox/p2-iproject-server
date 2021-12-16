
const {apiKey, spoon} = process.env
const axios = require ('axios')
const { verify } = require('../helper/formatter')

module.exports = class RecipeController {
  
  static showRecipe = async (req,res,next) => {
    try {
      const {searchTerm = "", number=20}= req.query 
      if ((searchTerm ) && number) {
        const showRecipe = await axios ({
          url: spoon+`/recipes/complexSearch?query=${searchTerm}&apiKey=${apiKey}`,
          method: "get",
        })
        res.status(200).json(showRecipe.data.results)
      } else {
        const showRecipe = await axios ({
          method: "get",
          url: spoon+`/recipes/random?number=15&apiKey=${apiKey}`
        })
        const menu = showRecipe.data.recipes
        const menus =[]
        menu.forEach ( el => {
          const {id, title, image, dishTypes, cuisines, spoonacularScore} = el
          menus.push({
            id,
            title,
            image,
            dishTypes,
            spoonacularScore,
            cuisines,
          })
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
      console.log(req.headers);
    const {access_token} = req.headers
    let status = ""
    if(access_token) {
      const payload = verify(access_token) 
      status = payload.status
    } else {
      status = "Guest"
    }
      const id = req.params.id
      console.log(status);
      const find = await axios ({
        method: "get",
        url: spoon + `/recipes/${id}/information?apiKey=${apiKey}`,
      })
      const data= find.data
      const score = find.data.spoonacularScore
      if (!data) {
        next ({name : "Food_not_found"})
      }
      console.log(score);
      if(score >80 && status!== "Premium") {
        next ({name : "upgradeAccount"})
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
    } catch(err) {
      console.log(err);
      next(err)
    }
  }
}