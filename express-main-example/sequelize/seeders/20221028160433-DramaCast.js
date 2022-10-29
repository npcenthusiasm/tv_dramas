'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
		queryInterface.bulkInsert('DramaCasts', [{
				castId: 25,
				dramaId: 13,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				castId: 26,
				dramaId: 14,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				castId: 27,
				dramaId: 13,
				createdAt: new Date(),
				updatedAt: new Date(),
			},{
				castId: 28,
				dramaId: 13,
				createdAt: new Date(),
				updatedAt: new Date(),
			}], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
		await queryInterface.bulkDelete('DramaCasts', null, {});
  }
};
