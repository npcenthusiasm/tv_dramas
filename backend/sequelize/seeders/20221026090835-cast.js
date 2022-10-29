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
		await queryInterface.bulkInsert('Casts', [
			{
				name: '江口拓也',
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				name: '置鮎龍太郎',
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				name: '早見沙織',
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				name: '種崎敦美',
				createdAt: new Date(),
				updatedAt: new Date(),
			},
		], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
		await queryInterface.bulkDelete('Casts', null, {});
  }
};
