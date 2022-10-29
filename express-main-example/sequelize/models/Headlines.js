'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Headlines extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Headlines.init({
    img: DataTypes.STRING,
    summary: DataTypes.STRING,
    topic: DataTypes.STRING,
    displayName: DataTypes.STRING,
    dominantColor: DataTypes.STRING,
    deeplink: DataTypes.STRING,
    titleId: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Headlines',
  });
  return Headlines;
};