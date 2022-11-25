'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('WatchLists', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        allowNull:false,
        type: Sequelize.STRING
      },
      priority: {
        allowNull:false,
        type: Sequelize.STRING
      },
      image_url: {
        allowNull:false,
        type: Sequelize.STRING
      },
      status: {
        allowNull:false,
        type: Sequelize.STRING
      },
      UserId: {
        allowNull:false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Users',
          key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      JikanAnimeId: {
        allowNull:false,
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('WatchLists');
  }
};