'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('detail_seminars', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      judul: {
        allowNull: false,
        type: Sequelize.STRING
      },
      kuota_peserta: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      waktu_pelaksanaan: {
        allowNull: false,
        type: Sequelize.DATE
      },
      tempat_pelaksanaan: {
        allowNull: false,
        type: Sequelize.STRING
      },
      biaya_pelaksanaan: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('detail_seminars');
  }
};