'use strict';

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
   await queryInterface.bulkInsert('PortofoliosTags', [
     {
       TagId: 1,
       PortofolioId: 1,
       createdAt: new Date(),
       updatedAt: new Date()
     },
     {
      TagId: 2,
      PortofolioId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      TagId: 3,
      PortofolioId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      TagId: 1,
      PortofolioId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    }
   ])
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
