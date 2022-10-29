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

			Drama.belongsToMany(models.Cast, { through: 'DramaCast', foreignKey: 'dramaId' });
			Drama.hasMany(models.Series)
			// Drama.belongsToMany(models.Cast, {
			// 	foreignKey: 'cast_Id'
			// })

				// Drama.hasMany(
				// 	Model.Cast,
				// 	{
				// 		foreignKey: 'cast_id'
				// 	}
				// )

    }
  }
  Drama.init({
    title: DataTypes.STRING,
		summary: DataTypes.STRING,
    img: DataTypes.STRING,
    episode: DataTypes.STRING,
    rating: DataTypes.STRING,
		release_info: DataTypes.STRING,
		content_agents: DataTypes.STRING,
		release_year: DataTypes.INTEGER,
		// cast_id: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Drama',
  });

  return Drama;
};
