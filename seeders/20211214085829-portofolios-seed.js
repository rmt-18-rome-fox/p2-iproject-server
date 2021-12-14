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
   await queryInterface.bulkInsert('Portofolios', [
     {
       title: 'Ini rumah 1',
       imageUrl: 'https://www.emporioarchitect.com/img/blog/alasan-harus-menggunakan-jasa-desain-rumah-minimalis-186835845151018051420-0.jpg',
       description: 'ini adalah deskripsi rumah ke 1 yang telah di desain dengan sangat baik dan sudah memenuhi kriteria dari clientnya',
       UserId: 1,
       createdAt: new Date(),
       updatedAt: new Date()
     },
     {
      title: 'Ini rumah 1',
      imageUrl: 'https://www.emporioarchitect.com/img/blog/alasan-harus-menggunakan-jasa-desain-rumah-minimalis-186835845151018051420-0.jpg',
      description: 'ini adalah deskripsi rumah ke 1 yang telah di desain dengan sangat baik dan sudah memenuhi kriteria dari clientnya',
      UserId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'Ini rumah 1',
      imageUrl: 'https://www.emporioarchitect.com/img/blog/alasan-harus-menggunakan-jasa-desain-rumah-minimalis-186835845151018051420-0.jpg',
      description: 'ini adalah deskripsi rumah ke 1 yang telah di desain dengan sangat baik dan sudah memenuhi kriteria dari clientnya',
      UserId: 2,
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
