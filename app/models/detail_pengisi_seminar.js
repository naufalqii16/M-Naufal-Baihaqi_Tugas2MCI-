'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class detail_pengisi_seminar extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      detail_pengisi_seminar.belongsTo(
        models.detail_seminar,
        {
          foreignKey: "ds_id"
        }
        
      )

      detail_pengisi_seminar.belongsTo(
        models.pengisi_seminar,
        {
          foreignKey: "ps_id"
        }
      )
    }
  }
  detail_pengisi_seminar.init({
    ds_id: DataTypes.INTEGER,
    ps_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'detail_pengisi_seminar',
  });
  return detail_pengisi_seminar;
};