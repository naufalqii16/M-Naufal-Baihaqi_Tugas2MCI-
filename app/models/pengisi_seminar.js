'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class pengisi_seminar extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      pengisi_seminar.hasMany(
        models.detail_pengisi_seminar, 
        {
          foreignKey: "ps_id"
        }
      )
    }
  }
  pengisi_seminar.init({
    nama: DataTypes.STRING,
    email: DataTypes.STRING,
    profesi: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'pengisi_seminar',
  });
  return pengisi_seminar;
};