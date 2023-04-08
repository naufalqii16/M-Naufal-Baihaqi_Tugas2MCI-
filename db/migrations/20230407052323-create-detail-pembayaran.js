'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('detail_pembayarans', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nominal_pembayaran: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      metode_pembayaran: {
        allowNull: false,
        type: Sequelize.STRING
      },
      waktu_pembayaran: {
        allowNull: false,
        type: Sequelize.DATE
      },
      status_pembayaran: {
        allowNull: false,
        type: Sequelize.STRING
      },
      user_id: {
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
    await queryInterface.dropTable('detail_pembayarans');
  }
};