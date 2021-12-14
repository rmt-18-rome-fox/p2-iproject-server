'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const user = require('../data/user.json')

    user.forEach((user) => {
      user.createdAt = new Date()
      user.updatedAt = new Date()
    })

    await queryInterface.bulkInsert('Users', user)
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
