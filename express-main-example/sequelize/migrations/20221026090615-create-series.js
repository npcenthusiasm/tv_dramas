'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Series', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
			title: {
        type: Sequelize.STRING
      },
			img:  {
        type: Sequelize.STRING
      },
			time: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
			dramaId: {
				type: Sequelize.INTEGER,
				allowNull: true,
				references:  {
					model: 'Dramas',
					key: 'id'
				}
			},
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Series');
  }
};
