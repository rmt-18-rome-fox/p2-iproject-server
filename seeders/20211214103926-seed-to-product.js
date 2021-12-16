'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const product = require('../data/product.json')

    product.forEach((product) => {
      product.createdAt = new Date()
      product.updatedAt = new Date()
    })

    await queryInterface.bulkInsert('Products', product)
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Products', null, {});
  }
};
