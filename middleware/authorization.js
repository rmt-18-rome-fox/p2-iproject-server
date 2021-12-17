const { User, Favourite } = require("../models")

const authorization = async (req, res, next) => {
	try {
    const { label } = req.body
		const UserId = +req.user.id
		const favourites = await Favourite.findOne({ where: { label } })
		if (!favourites) throw { name: "RecipeNotFound" }
		if (favourites.UserId !== UserId) throw { name: "Forbidden" }
		console.log("ini authorization")
		next()
	} catch (err) {
		next(err)
	}
}

module.exports = authorization
