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
      PortofolioId: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      TagId: 1,
      PortofolioId: 4,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      TagId: 1,
      PortofolioId: 5,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      TagId: 1,
      PortofolioId: 6,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      TagId: 3,
      PortofolioId: 7,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      TagId: 2,
      PortofolioId: 8,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      TagId: 1,
      PortofolioId: 9,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      TagId: 2,
      PortofolioId: 10,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      TagId: 1,
      PortofolioId: 11,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      TagId: 3,
      PortofolioId: 12,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      TagId: 1,
      PortofolioId: 12,
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
     await queryInterface.bulkDelete('PortofoliosTags', null, {})
  }
};
