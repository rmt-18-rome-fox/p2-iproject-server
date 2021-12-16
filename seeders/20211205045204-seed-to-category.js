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
     return queryInterface.bulkInsert('Categories', [
       {
         name: "Ceramic Art",
         createdAt: new Date(),
         updatedAt: new Date()
       },
       {
        name: "Ikebana Art",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Mosaic Art",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Paint Art",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Sculptural Art",
        createdAt: new Date(),
        updatedAt: new Date()
      },
       
     ])
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     return queryInterface.bulkDelete('Categories', null)
  }
};
