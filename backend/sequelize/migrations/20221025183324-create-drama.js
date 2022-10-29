'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Dramas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
			summary: {
        type: Sequelize.STRING
      },
      img: {
        type: Sequelize.STRING
      },
      episode: {
        type: Sequelize.STRING
      },
      rating: {
        type: Sequelize.STRING
      },
			release_info: {
        type: Sequelize.STRING
			},
			release_year: {
        type: Sequelize.STRING
			},
			content_agents: {
        type: Sequelize.STRING
			},
			// castId: {
			// 	type: Sequelize.INTEGER,
			// 	allowNull: true,
			// 	references:  {
			// 		model: 'Casts',
			// 		key: 'id'
			// 	}
			// },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Dramas');
  }
};
