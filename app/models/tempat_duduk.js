'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tempat_duduk extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      tempat_duduk.belongsTo(
        models.pemesanan,
        {
          foreignKey: 'pemesanan_id',
        }
      )
    }
  }
  tempat_duduk.init({
    letak: DataTypes.STRING,
    pemesanan_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'tempat_duduk',
  });
  return tempat_duduk;
};