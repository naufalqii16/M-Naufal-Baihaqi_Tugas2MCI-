'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class pemesanan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      pemesanan.hasMany(
        models.tempat_duduk,
        {
          foreignKey: 'pemesanan_id',
        }
      )
      pemesanan.belongsTo(
        models.detail_pembayaran,
        {
          foreignKey: 'detail_bayar_id'
        }
      )

      pemesanan.hasMany(
        models.pemesanan_detail_seminar, {
          foreignKey: 'pemesanan_id',
        }
      )

    }
  }
  pemesanan.init({
    kuantitas: DataTypes.INTEGER,
    waktu_pemesanan: DataTypes.DATE,
    detail_bayar_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'pemesanan',
  });
  return pemesanan;
};