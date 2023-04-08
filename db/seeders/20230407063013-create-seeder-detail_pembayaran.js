'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const detail_pembayarans = [
      {
        nominal_pembayaran : 60000,
        metode_pembayaran : 'Go-pay',
        waktu_pembayaran : new Date(),
        status_pembayaran : 'Lunas',
        user_id : 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];
    await queryInterface.bulkInsert('detail_pembayarans', detail_pembayarans)
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
