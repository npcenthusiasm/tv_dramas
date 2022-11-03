'use strict';

var jsonData = require('../../../crawler/jsons/dramas.json')

function getData () {

	const data = jsonData.map(it => {
		return {
			title: it.title,
			img: it.img,
			summary: "",
			episode: it.episode,
			rating: it.rating,
			release_info: "--",
			content_agents: "--",
			release_year: 2022,
			createdAt: new Date(),
			updatedAt: new Date(),
		}
	})
	return data
}

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
		const data = await getData()
		await queryInterface.bulkInsert('Dramas', data, {})
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
		await queryInterface.bulkDelete('Dramas', null, {});
  }
};
