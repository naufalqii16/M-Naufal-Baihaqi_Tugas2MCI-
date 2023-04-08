'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class detail_pembayaran extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      detail_pembayaran.hasOne(
        models.pemesanan, {
          foreignKey: 'detail_bayar_id'
        }
      )

      detail_pembayaran.belongsTo(
        models.user,
        {
          foreignKey: 'user_id'
        }
      )

    }
  }
  detail_pembayaran.init({
    nominal_pembayaran: DataTypes.INTEGER,
    metode_pembayaran: DataTypes.STRING,
    waktu_pembayaran: DataTypes.DATE,
    status_pembayaran: DataTypes.STRING,
    user_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'detail_pembayaran',
  });
  return detail_pembayaran;
};