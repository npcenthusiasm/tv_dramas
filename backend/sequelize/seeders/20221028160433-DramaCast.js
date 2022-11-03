'use strict';
console.log(1);
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
		//  沒 insert 進去要看關聯到的資料是否有值
		queryInterface.bulkInsert('DramaCasts', [{
				castId: 1,
				dramaId: 1,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				castId: 2,
				dramaId: 1,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				castId: 3,
				dramaId: 1,
				createdAt: new Date(),
				updatedAt: new Date(),
			},{
				castId: 4,
				dramaId: 1,
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
