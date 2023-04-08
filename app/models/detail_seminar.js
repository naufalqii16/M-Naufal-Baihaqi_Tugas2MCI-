'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class detail_seminar extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      detail_seminar.hasMany(
        models.pemesanan_detail_seminar, {
          foreignKey: 'detail_seminar_id'
        }
      )

      detail_seminar.hasMany(
        models.detail_pengisi_seminar, {
          foreignKey: "ds_id"
        }
      )
    }
  }
  detail_seminar.init({
    judul: DataTypes.STRING,
    kuota_peserta: DataTypes.INTEGER,
    waktu_pelaksanaan: DataTypes.DATE,
    tempat_pelaksanaan: DataTypes.STRING,
    biaya_pelaksanaan: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'detail_seminar',
  });
  return detail_seminar;
};