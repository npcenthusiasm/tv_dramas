'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cast extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
			Cast.belongsToMany(models.Drama, { through: 'DramaCast', foreignKey: 'castId' });

			// Cast.belongsToMany(models.Drama, {
			// 	foreignKey: 'drama_id'
			// })

			// Cast.belongsTo(
			// 	models.Drama,
			// 	{
			// 		foreignKey: 'drama_id'
			// 	}
			// )
    }
  }
  Cast.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Cast',
  });
  return Cast;
};
