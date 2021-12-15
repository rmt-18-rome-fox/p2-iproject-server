'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Weather', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      datetime: {
        type: Sequelize.INTEGER
      },
      status: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      icon_url: {
        type: Sequelize.STRING
      },
      temperature: {
        type: Sequelize.INTEGER
      },
      feels_like: {
        type: Sequelize.INTEGER
      },
      pressure: {
        type: Sequelize.INTEGER
      },
      humidity: {
        type: Sequelize.INTEGER
      },
      wing_speed: {
        type: Sequelize.INTEGER
      },
      cloudiness: {
        type: Sequelize.STRING
      },
      LocationId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Locations",
          key: "id"
        },
        onUpdate: "cascade",
        onDelete: "cascade",
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Weather');
  }
};