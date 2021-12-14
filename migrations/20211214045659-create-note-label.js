'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('NoteLabels', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      LabelId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Labels',
          key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      NoteId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Notes',
          key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
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
    await queryInterface.dropTable('NoteLabels');
  }
};