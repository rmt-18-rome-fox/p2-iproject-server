'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const category = require('../data/category.json')

    category.forEach((category) => {
      category.createdAt = new Date()
      category.updatedAt = new Date()
    })

    await queryInterface.bulkInsert('Categories', category)
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Categories', null, {});
  }
};
