'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class pemesanan_detail_seminar extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      pemesanan_detail_seminar.belongsTo(
        models.pemesanan,
        {
          foreignKey: 'pemesanan_id',
        }
      )

      pemesanan_detail_seminar.belongsTo(
        models.detail_seminar,
        {
          foreignKey: 'detail_seminar_id'
        }
      )
    }
  }
  pemesanan_detail_seminar.init({
    pemesanan_id: DataTypes.INTEGER,
    detail_seminar_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'pemesanan_detail_seminar',
  });
  return pemesanan_detail_seminar;
};