'use strict';
const fs = require(`fs`)

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

     let dataProducts = JSON.parse(fs.readFileSync(`./data/products.json`, `utf8`));

     dataProducts.forEach(element => {
       element.createdAt = new Date(),
       element.updatedAt = new Date()
     });

      await queryInterface.bulkInsert('Products', dataProducts);
   
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

     await queryInterface.bulkDelete('Products', null, {});
    
  }
};
