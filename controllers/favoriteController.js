const { User, Favourite } = require("../models")

const postFavorite = async (req, res, next) => {
	try {
		const { image, dishType, label} = req.body
		const UserId = +req.user.id
    // const label = req.params.label
    console.log(UserId, image, dishType, label, "masuk post favorite")
		const foundRecipe = await Favourite.findOne({ where: { UserId, label } })
		if (foundRecipe) {
			throw { name: "RecipeExists" }
		}
		const newFavourite = await Favourite.create({
			label,
			image,
			dishType,
      UserId
		})
		res.status(201).json({ newFavourite })
	} catch (err) {
		console.log(err)
		next(err)
	}
}

const getFavorite = async (req, res) => {
	try {
		const UserId = req.user.id
		const favourites = await Favourite.findAll({
			where: { UserId },
			include: {
				model: User,
				attributes: {
					exclude: ["password", "createdAt", "updatedAt"],
				},
			},
		})
		res.status(200).json({ favourites })
	} catch (err) {
		next(err)
	}
}

const deleteFavorite = async (req, res, next) => {
	try {
		const UserId = req.user.id
		const { label } = req.params
		await Favourite.destroy({ where: { UserId, label } })
    res.status(200).json({message: "Success delete recipe from favourites"})
	} catch (err) {
    next(err)
  }
}

module.exports = { postFavorite, getFavorite, deleteFavorite }
