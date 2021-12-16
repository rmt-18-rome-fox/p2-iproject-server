// const { Recipe } = require("../models")
const axios = require("axios") 

const fetchRecipes = async (req, res, next) => {
	try {
    const apiUrl = "https://api.edamam.com/search"
		const items = ["plan", "pizza", "chicken", "beef", "meats"]
		const item = items[Math.floor(Math.random() * items.length)]
		const { data } = await axios.get(`${apiUrl}`, {
			params: {
				q: item,
				app_id: "5b6623d5",
				app_key: "46674aa2193dbb7b88ffd897331e661a",
				from: 0,
				to: 9,
			},
		}) 
		res.status(200).json(data)
	} catch (err) {
    console.log(err)
		next(err)
	}
}

module.exports = { fetchRecipes }
