'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      user.hasMany(
        models.detail_pembayaran,
        {
          foreignKey: 'user_id'
        }
      )
    }
  }
  user.init({
    nama: DataTypes.STRING,
    email: DataTypes.STRING,
    usia: DataTypes.INTEGER,
    kota_asal: DataTypes.STRING,
    kota_domisili: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'user',
  });
  return user;
};