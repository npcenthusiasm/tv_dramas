'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class DramaCast extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
			// DramaCast.belongsToMany(models.Drama);
			// DramaCast.belongsToMany(models.Cast);
    }
  }
  DramaCast.init({
    castId: DataTypes.INTEGER,
		dramaId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'DramaCast',
  });

  return DramaCast;
};
