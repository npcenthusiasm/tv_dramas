'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Drama extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Drama.init({
    title: DataTypes.STRING,
    img: DataTypes.STRING,
    episode: DataTypes.STRING,
    rating: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Drama',
  });
  return Drama;
};