'use strict';

var jsonData = require('../../../crawler/episode.json')
var data = jsonData.map(it => {
	return {
		...it,
		dramaId: 13, // NOTE: test data 因為它是屬於 Drams key 所以必須要有 drama 才可以新增
		createdAt: new Date(),
		updatedAt: new Date(),
	}
})
// console.log('data: ', data);
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

		queryInterface.bulkInsert('Series', data, {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
		await queryInterface.bulkDelete('Series', null, {});
  }
};
