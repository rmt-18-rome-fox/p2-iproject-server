"use strict"
const { Model } = require("sequelize")
const { encrypt } = require('../helpers/bcrypt')
module.exports = (sequelize, DataTypes) => {
	class User extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			User.hasMany(models.Favourite)
		}
	}
	User.init(
		{
			username: {
				type: DataTypes.STRING,
				allowNull: false,
				validate: {
					notEmpty: { msg: "Please input username." },
					notNull: { msg: "Please input username." },
				},
			},
			email: {
				type: DataTypes.STRING,
				allowNull: false,
				unique: { args: true, msg: "Email already used!" },
				validate: {
					notEmpty: { msg: "Please input email." },
					notNull: { msg: "Please input email." },
					isEmail: { msg: "Please input a valid email." },
				},
			},
			password: {
				type: DataTypes.STRING,
				allowNull: false,
				validate: {
					notEmpty: { msg: "Please input password." },
					notNull: { msg: "Please input password." },
					len: { args: [5, 20], msg: "Password length must be at least 5 characters." },
				},
			},
			role: {
				type: DataTypes.STRING,
			},
			phoneNumber: {
				allowNull: false,
				type: DataTypes.INTEGER,
				validate: {
					notNull: { msg: "Please input phone number." },
					notEmpty: { msg: "Please input phone number." },
				},
			},
			address: {
				allowNull: false,
				type: DataTypes.INTEGER,
				validate: {
					notNull: { msg: "Please input address." },
					notEmpty: { msg: "Please input address." },
				},
			},
		},
		{
			hooks: {
				beforeCreate: (Instance) => {
					Instance.password = encrypt(Instance.password)
				},
			},
			sequelize,
			modelName: "User",
		}
	)
	return User
}
