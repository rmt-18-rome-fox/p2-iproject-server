"use strict"
const { Model } = require("sequelize")
module.exports = (sequelize, DataTypes) => {
	class Favourite extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			Favourite.belongsTo(models.User)
		}
	}
	Favourite.init(
		{
			label: {
				allowNull: false,
				type: DataTypes.STRING,
				validate: {
					notNull: { msg: "Label is required" },
					notEmpty: { msg: "Label cannot be empty" },
				},
			},
			image: {
				allowNull: false,
				type: DataTypes.STRING,
				validate: {
					notNull: { msg: "Image is required" },
					notEmpty: { msg: "Image cannot be empty" },
				},
			},
			dishType: {
				allowNull: false,
				type: DataTypes.STRING,
				validate: {
					notNull: { msg: "Dish Type is required" },
					notEmpty: { msg: "Dish Type cannot be empty" },
				},
			},
			UserId: {
				allowNull: false,
				type: DataTypes.INTEGER,
				validate: {
					notNull: { msg: "User Id is required" },
					notEmpty: { msg: "User Id cannot be empty" },
				},
			},
		},
		{
			sequelize,
			modelName: "Favourite",
		}
	)
	return Favourite
}
