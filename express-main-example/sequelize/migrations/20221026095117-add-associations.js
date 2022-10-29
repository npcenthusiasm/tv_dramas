'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */

		await queryInterface.createTable('DramaCasts', {
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
			dramaId: {
				type: Sequelize.INTEGER,
				primaryKey: true,
				references: {
          model: 'Dramas', // name of Target model
          key: 'id', // key in Target model that we're referencing
        },
				onUpdate: 'CASCADE', // 外鍵約束
				onDelete: 'RESTRICT',
			},
			castId: {
				type: Sequelize.INTEGER,
				primaryKey: true,
				references: {
          model: 'Casts', // name of Target model
          key: 'id', // key in Target model that we're referencing
        },
				onUpdate: 'CASCADE', // 外鍵約束
				onDelete: 'RESTRICT',
			},
		})
		// await queryInterface.addColumn('Drama', 'castId',
		// 	{
    //     type: Sequelize.INTEGER,
		// 		allowNull: false,
		// 		references: {
		// 			model: 'Cast',
		// 			key: 'id'
		// 		},
		// 		onUpdate: 'CASCADE', // 外鍵約束
		// 		onDelete: 'RESTRICT',
    //   },
		// )
		// (
		// 	queryInterface.addColumn('Drama', 'castId',
		// 	{
    //     type: Sequelize.INTEGER,
		// 		allowNull: false,
		// 		references: {
		// 			model: 'Cast',
		// 			key: 'id'
		// 		},
		// 		onUpdate: 'CASCADE', // 外鍵約束
		// 		onDelete: 'RESTRICT',
    //   },
		// 	)
		// )

		// (
		// 	queryInterface.addColumn(
		// 		'Dramas',
		// 		'theme_id',
		// 		{
		// 			type: Sequelize.INTEGER
		// 		},
		// 	),
		// 	queryInterface.addColumn(
		// 		'Dramas',
		// 		'writer_id',
		// 		{
		// 			type: Sequelize.INTEGER
		// 		},
		// 	),
		// 	queryInterface.addColumn(
		// 		'Dramas',
		// 		'cast_id',
		// 		{
		// 			type: Sequelize.INTEGER
		// 		},
		// 	),
		// 	queryInterface.addColumn(
		// 		'Dramas',
		// 		'series_id',
		// 		{
		// 			type: Sequelize.INTEGER
		// 		},
		// 	),
		// 	queryInterface.addColumn(
		// 		'Dramas',
		// 		'director_id',
		// 		{
		// 			type: Sequelize.INTEGER
		// 		},
		// 	),
		// );
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
		await queryInterface.dropTable('DramaCast');

		// return queryInterface.removeColumn(
		// 	'Drama', // name of the Target model
		// 	'castId' // key we want to remove
		// );
  }
};
