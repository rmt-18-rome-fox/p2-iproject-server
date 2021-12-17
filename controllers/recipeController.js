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

const recipeReader = async (req, res, next) => {
	try {
		const {text} = req.body
		console.log(text)
		const rss = process.env.RSS_KEY
		const string = text.replace(/[^a-zA-Z0-9]/g,' ')
		const response = await axios.get(`http://api.voicerss.org/?key=${rss}&hl=en-us&src='${string}'&c=mp3&f=44khz_16bit_stereo&b64=true`)
		res.status(200).json(response.data)
	} catch (err) {
		console.log(err);
		next(err)
	}
}

module.exports = { fetchRecipes, recipeReader }
