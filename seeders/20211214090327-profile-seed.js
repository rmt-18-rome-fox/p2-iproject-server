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
   await queryInterface.bulkInsert('Profiles', [
     {
       name: 'Ini Nama Architect 1',
       phoneNumber: '0850684869495',
       description: 'ini adalah deskripsi dari arsitek pertama yang paling pertama didaftarkan :)',
       imageUrl: 'https://cdn-cms.pgimgs.com/static/2019/05/Bentuk-Rumah-Minimalis-1.jpg',
       address: 'ini alamat arsitek 1',
       UserId: 1,
       price: 100000,
       createdAt: new Date(),
       updatedAt: new Date()
     },
     {
      name: 'Ini Nama Architect 2',
      phoneNumber: '0850684869495',
      description: 'ini adalah deskripsi dari arsitek pertama yang paling pertama didaftarkan :)',
      imageUrl: 'https://www.intiland.com/wp-content/uploads/2020/05/gambar_1_artikel_22-cb99c29edf-e1588560479167.jpg',
      address: 'ini alamat arsitek 1',
      UserId: 2,
      price: 200000,
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
    await queryInterface.bulkDelete('Profiles', null, {})
  }
};
