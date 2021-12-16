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
   await queryInterface.bulkInsert('Users', [
     {
       email: 'architect1@mail.com',
       password: 'architect1',
       role: 'architect',
       status: true,
       createdAt: new Date(),
       updatedAt: new Date()
     },
     {
      email: 'architect2@mail.com',
      password: 'architect2',
      role: 'architect',
      status: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      email: 'customer1@mail.com',
      password: 'customer1',
      role: 'customer',
      status: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      email: 'customer2@mail.com',
      password: 'customer2',
      role: 'customer',
      status: true,
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
     await queryInterface.bulkDelete('Users', null, {})
  }
};
