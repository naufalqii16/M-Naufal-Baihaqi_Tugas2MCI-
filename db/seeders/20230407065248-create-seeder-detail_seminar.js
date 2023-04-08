'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const detail_seminars = [
      {
        judul : 'maksimalkan pemakaian AI',
        kuota_peserta : 150,
        waktu_pelaksanaan : new Date(),
        tempat_pelaksanaan : 'graha',
        biaya_pelaksanaan : 60000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];
    await queryInterface.bulkInsert('detail_seminars', detail_seminars)
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
