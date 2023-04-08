'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const users = [
      {
        nama :'Baihaqi',
        email : 'naufalqii@gmail.com',
        usia : 16,
        kota_asal : 'cirebon',
        kota_domisili : 'surabaya',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nama : 'Jasmine',
        email : 'jasmine@gmail.com',
        usia : 15,
        kota_asal : 'sidoarjo',
        kota_domisili : 'surabaya',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];
    await queryInterface.bulkInsert('users', users)
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
