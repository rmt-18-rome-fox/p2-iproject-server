"use strict"
module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable("Favourites", {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			label: {
				allowNull: false,
				type: Sequelize.STRING,
			},
			dishType: {
				allowNull: false,
				type: Sequelize.STRING,
			},
			image: {
				allowNull: false,
				type: Sequelize.STRING,
			},
			UserId: {
				allowNull: false,
				type: Sequelize.INTEGER,
				references: {
					model: "Users",
					key: "id",
				},
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
		})
	},
	down: async (queryInterface, Sequelize) => {
		await queryInterface.dropTable("Favourites")
	},
}
