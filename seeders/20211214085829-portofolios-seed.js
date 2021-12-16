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
        title: 'Ini rumah 2',
        imageUrl: 'https://image.cermati.com/c_fill,fl_progressive,g_north_east,h_800,q_80,w_1200/afc5qd3hkoy8ubxwrftk.jpg',
        description: 'ini adalah deskripsi rumah ke 2 yang telah di desain dengan sangat baik dan sudah memenuhi kriteria dari clientnya',
        UserId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Ini rumah 3',
        imageUrl: 'https://i2.wp.com/arsiteki.id/wp-content/uploads/2021/08/Desain-rumah-minimalis-modern.png',
        description: 'ini adalah deskripsi rumah ke 3 yang telah di desain dengan sangat baik dan sudah memenuhi kriteria dari clientnya',
        UserId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Ini rumah 4',
        imageUrl: 'https://arsitagx-master.s3.ap-southeast-1.amazonaws.com/img-small/24707/13223/griya-lestari-arsitektur-desain-rumah-minimalis1577931186-s.jpeg',
        description: 'ini adalah deskripsi rumah ke 4 yang telah di desain dengan sangat baik dan sudah memenuhi kriteria dari clientnya',
        UserId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Ini rumah 5',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD_zonzWHSSVU6l6yaTmZ0lKw7QBOyO8Fk3w&usqp=CAU',
        description: 'ini adalah deskripsi rumah ke 5 yang telah di desain dengan sangat baik dan sudah memenuhi kriteria dari clientnya',
        UserId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Ini rumah 6',
        imageUrl: 'https://strgonelabsprod.blob.core.windows.net/cms/post/desain-rumah-impian-1628498422735652666.webp',
        description: 'ini adalah deskripsi rumah ke 6 yang telah di desain dengan sangat baik dan sudah memenuhi kriteria dari clientnya',
        UserId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Ini rumah 7',
        imageUrl: 'https://interiordesign.id/wp-content/uploads/2021/01/11-scaled.jpg',
        description: 'ini adalah deskripsi rumah ke 7 yang telah di desain dengan sangat baik dan sudah memenuhi kriteria dari clientnya',
        UserId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Ini rumah 8',
        imageUrl: 'https://cdn-cms.pgimgs.com/static/2020/12/1.-Desain-Rumah-Minimalis-dengan-Atap-Pelana.jpg',
        description: 'ini adalah deskripsi rumah ke 8 yang telah di desain dengan sangat baik dan sudah memenuhi kriteria dari clientnya',
        UserId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Ini rumah 9',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr2WClBfyc2UELvBVTMGFsXZ3AGcppi2dSSA&usqp=CAU',
        description: 'ini adalah deskripsi rumah ke 9 yang telah di desain dengan sangat baik dan sudah memenuhi kriteria dari clientnya',
        UserId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Ini rumah 10',
        imageUrl: 'https://strgonelabsprod.blob.core.windows.net/cms/post/desain-rumah-minimalis-1628826610202795817.webp',
        description: 'ini adalah deskripsi rumah ke 10 yang telah di desain dengan sangat baik dan sudah memenuhi kriteria dari clientnya',
        UserId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Ini rumah 11',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv4QofgTIpisaJ8-OcBMFG480N24Gm_2lZeQ&usqp=CAU',
        description: 'ini adalah deskripsi rumah ke 11 yang telah di desain dengan sangat baik dan sudah memenuhi kriteria dari clientnya',
        UserId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Ini rumah 12',
        imageUrl: 'https://s0.bukalapak.com/img/53317698631/large/DESAIN_RUMAH__6_X_13_LUAS_BANGUNAN_122M00_DUA_LANTAI_.jpg',
        description: 'ini adalah deskripsi rumah ke 12 yang telah di desain dengan sangat baik dan sudah memenuhi kriteria dari clientnya',
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
    await queryInterface.bulkDelete('Portofolios', null, {})
  }
};
